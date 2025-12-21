/*
  # Create beta signups table for Zenyra landing page

  1. New Tables
    - `beta_signups`
      - `id` (uuid, primary key)
      - `full_name` (text, required) - Applicant's full name
      - `email` (text, unique, required) - Contact email
      - `phone_number` (text, optional) - Contact phone
      - `role` (text, required) - Agent type (independent, agency owner, call center manager, etc.)
      - `years_experience` (text, required) - Experience level (0-1, 2-5, 5+)
      - `monthly_enrollments` (integer) - Current enrollment volume
      - `current_tools` (jsonb) - Array of tools currently used
      - `pain_points` (text) - Biggest challenges
      - `interest_level` (text, required) - Low, Medium, High
      - `agency_size` (integer) - Number of agents in agency
      - `created_at` (timestamptz) - Signup timestamp
      - `updated_at` (timestamptz) - Last update timestamp
  
  2. Security
    - Enable RLS on `beta_signups` table
    - Add policy for public insert (anyone can sign up)
    - No read policies (admin-only access via service role)
  
  3. Important Notes
    - Email must be unique to prevent duplicate signups
    - All signup data captured for investor metrics
    - Current tools stored as JSON array for flexibility
    - Default timestamps for tracking signup flow
*/

CREATE TABLE IF NOT EXISTS beta_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone_number text,
  role text NOT NULL,
  years_experience text NOT NULL,
  monthly_enrollments integer DEFAULT 0,
  current_tools jsonb DEFAULT '[]'::jsonb,
  pain_points text,
  interest_level text NOT NULL,
  agency_size integer DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can sign up for beta"
  ON beta_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_beta_signups_email ON beta_signups(email);
CREATE INDEX IF NOT EXISTS idx_beta_signups_created_at ON beta_signups(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_beta_signups_interest_level ON beta_signups(interest_level);