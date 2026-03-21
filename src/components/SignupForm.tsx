import React, { useState } from 'react';
import { CheckCircle2, Shield, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface SignupFormProps {
  onClose: () => void;
}

const tools = [
  'CRM (Salesforce, HubSpot, etc.)',
  'Lead aggregators (Aged Lead Store, etc.)',
  'Call/Dialer systems',
  'Email marketing tools',
  'Spreadsheets (Excel, Google Sheets)',
  'Medicare-specific platforms (Connecture, Sunfire, etc.)',
  'Other'
];

export function SignupForm({ onClose }: SignupFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [npiLoading, setNpiLoading] = useState(false);
  const [npiError, setNpiError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    npiNumber: '',
    npiVerified: false,
    npiName: '',
    role: '',
    yearsExperience: '',
    monthlyEnrollments: '',
    currentTools: [] as string[],
    painPoints: '',
    interestLevel: '',
    agencySize: ''
  });

  const handleToolToggle = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter(t => t !== tool)
        : [...prev.currentTools, tool]
    }));
  };

  const verifyNPI = async () => {
    if (!formData.npiNumber || formData.npiNumber.length !== 10) {
      setNpiError('NPI must be exactly 10 digits.');
      return;
    }
    setNpiLoading(true);
    setNpiError('');
    try {
      const res = await fetch(
        `https://npiregistry.cms.hhs.gov/api/?number=${formData.npiNumber}&enumeration_type=NPI-1&version=2.1`
      );
      const data = await res.json();
      if (data.result_count === 0) {
        setNpiError('NPI not found. Please check the number and try again.');
        setFormData(prev => ({ ...prev, npiVerified: false, npiName: '' }));
      } else {
        const result = data.results[0];
        const name = `${result.basic.first_name} ${result.basic.last_name}`;
        setFormData(prev => ({ ...prev, npiVerified: true, npiName: name }));
        setNpiError('');
      }
    } catch (err) {
      setNpiError('Could not verify NPI. Please try again.');
    } finally {
      setNpiLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.npiVerified) {
      setError('Please verify your NPI number before submitting.');
      setLoading(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from('beta_signups')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone_number: formData.phoneNumber || null,
            npi_number: formData.npiNumber,
            npi_verified: formData.npiVerified,
            npi_name: formData.npiName,
            role: formData.role,
            years_experience: formData.yearsExperience,
            monthly_enrollments: parseInt(formData.monthlyEnrollments) || 0,
            current_tools: formData.currentTools,
            pain_points: formData.painPoints,
            interest_level: formData.interestLevel,
            agency_size: parseInt(formData.agencySize) || 1
          }
        ]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('This email is already registered. Please use a different email.');
        } else {
          setError('Something went wrong. Please try again.');
        }
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
          <p className="text-gray-600">
            Thank you for your interest in Zenyra. We'll be in touch soon with beta access details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full my-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">Request Beta Access</h3>
            <p className="text-gray-600 mt-1">Limited spots available</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Full Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number (Optional)</label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* NPI Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">NPI Number *</label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                maxLength={10}
                value={formData.npiNumber}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '');
                  setFormData({ ...formData, npiNumber: val, npiVerified: false, npiName: '' });
                  setNpiError('');
                }}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10-digit NPI number"
              />
              <button
                type="button"
                onClick={verifyNPI}
                disabled={npiLoading || formData.npiNumber.length !== 10}
                className="px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {npiLoading ? 'Checking...' : 'Verify NPI'}
              </button>
            </div>
            {formData.npiVerified && (
              <div className="mt-2 flex items-center space-x-2 text-green-600 text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                <span>Verified: {formData.npiName}</span>
              </div>
            )}
            {npiError && (
              <p className="mt-2 text-sm text-red-600">{npiError}</p>
            )}
          </div>

          {/* Role + Experience */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Role *</label>
              <select
                required
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your role</option>
                <option value="independent">Independent Agent</option>
                <option value="agency_owner">Agency Owner</option>
                <option value="call_center">Call Center Manager</option>
                <option value="team_lead">Team Lead</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience *</label>
              <select
                required
                value={formData.yearsExperience}
                onChange={e => setFormData({ ...formData, yearsExperience: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
          </div>

          {/* Monthly Enrollments + Agency Size */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Enrollments *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.monthlyEnrollments}
                onChange={e => setFormData({ ...formData, monthlyEnrollments: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Agency Size (# of agents) *</label>
              <input
                type="number"
                required
                min="1"
                value={formData.agencySize}
                onChange={e => setFormData({ ...formData, agencySize: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1"
              />
            </div>
          </div>

          {/* Current Tools */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Current Tools (select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {tools.map(tool => (
                <label key={tool} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.currentTools.includes(tool)}
                    onChange={() => handleToolToggle(tool)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{tool}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Biggest Pain Points *</label>
            <textarea
              required
              rows={4}
              value={formData.painPoints}
              onChange={e => setFormData({ ...formData, painPoints: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us about your biggest challenges with your current workflow..."
            />
          </div>

          {/* Interest Level */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Level *</label>
            <div className="flex gap-4">
              {['Low', 'Medium', 'High'].map(level => (
                <label key={level} className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="interestLevel"
                    required
                    value={level}
                    checked={formData.interestLevel === level}
                    onChange={e => setFormData({ ...formData, interestLevel: e.target.value })}
                    className="sr-only"
                  />
                  <div className={`border-2 rounded-xl px-4 py-3 text-center font-semibold transition-all ${
                    formData.interestLevel === level
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}>
                    {level}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Privacy note */}
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span>We never sell your data. Your information is kept strictly confidential.</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Request Beta Access'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
