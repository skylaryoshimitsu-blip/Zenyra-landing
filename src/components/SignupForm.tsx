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
  const [npnLoading, setNpnLoading] = useState(false);
  const [npnError, setNpnError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    npnNumber: '',
    npnVerified: false,
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

  const verifyNPN = () => {
    const npn = formData.npnNumber.trim();
    if (!npn || !/^\d+$/.test(npn)) {
      setNpnError('NPN must contain numbers only.');
      return;
    }
    if (npn.length < 6 || npn.length > 9) {
      setNpnError('NPN must be between 6 and 9 digits.');
      return;
    }
    setNpnLoading(true);
    setTimeout(() => {
      setFormData(prev => ({ ...prev, npnVerified: true }));
      setNpnError('');
      setNpnLoading(false);
    }, 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.npnVerified) {
      setError('Please validate your NPN number before submitting.');
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
            npi_number: formData.npnNumber,
            npi_verified: formData.npnVerified,
            npi_name: null,
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
       setError(`Error: ${insertError.message} (code: ${insertError.code})`);
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-5 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Request Beta Access</h3>
            <p className="text-gray-500 text-sm mt-0.5">Limited spots available</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (Optional)</label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* NPN Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              NPN — National Producer Number *
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                maxLength={9}
                value={formData.npnNumber}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '');
                  setFormData({ ...formData, npnNumber: val, npnVerified: false });
                  setNpnError('');
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="6–9 digit NPN"
              />
              <button
                type="button"
                onClick={verifyNPN}
                disabled={npnLoading || formData.npnNumber.length < 6}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {npnLoading ? 'Checking...' : 'Validate NPN'}
              </button>
            </div>
            {formData.npnVerified && (
              <div className="mt-1 flex items-center space-x-2 text-green-600 text-xs font-medium">
                <CheckCircle2 className="h-3 w-3" />
                <span>NPN format validated ✓</span>
              </div>
            )}
            {npnError && (
              <p className="mt-1 text-xs text-red-600">{npnError}</p>
            )}
          </div>

          {/* Role + Experience */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Role *</label>
              <select
                required
                value={formData.role}
                onChange={e => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <label className="block text-xs font-semibold text-gray-700 mb-1">Years of Experience *</label>
              <select
                required
                value={formData.yearsExperience}
                onChange={e => setFormData({ ...formData, yearsExperience: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 years</option>
                <option value="2-5">2-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
          </div>

          {/* Monthly Enrollments + Agency Size */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Monthly Enrollments *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.monthlyEnrollments}
                onChange={e => setFormData({ ...formData, monthlyEnrollments: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Agency Size (# of agents) *</label>
              <input
                type="number"
                required
                min="1"
                value={formData.agencySize}
                onChange={e => setFormData({ ...formData, agencySize: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1"
              />
            </div>
          </div>

          {/* Current Tools */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Current Tools (select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {tools.map(tool => (
                <label key={tool} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.currentTools.includes(tool)}
                    onChange={() => handleToolToggle(tool)}
                    className="w-3.5 h-3.5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-xs text-gray-700">{tool}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Biggest Pain Points *</label>
            <textarea
              required
              rows={3}
              value={formData.painPoints}
              onChange={e => setFormData({ ...formData, painPoints: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us about your biggest challenges with your current workflow..."
            />
          </div>

          {/* Interest Level */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Interest Level *</label>
            <div className="flex gap-3">
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
                  <div className={`border-2 rounded-lg px-3 py-2 text-center text-sm font-semibold transition-all ${
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
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Privacy note */}
          <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
            <Shield className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>We never sell your data. Your information is kept strictly confidential.</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
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
