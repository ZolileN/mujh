/*
  # Create Applications Table

  ## Purpose
  This migration creates the database schema for storing funeral cover applications
  submitted through the MU JOBE Holdings website.

  ## Tables Created
  
  ### `applications`
  Stores all funeral cover applications from potential clients.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each application
  - `first_name` (text) - Applicant's first name
  - `last_name` (text) - Applicant's last name
  - `id_number` (text) - South African ID number
  - `email` (text) - Contact email address
  - `phone` (text) - Contact phone number
  - `address` (text) - Street address
  - `city` (text) - City
  - `province` (text) - South African province
  - `postal_code` (text) - Postal code
  - `coverage_amount` (text) - Desired coverage amount
  - `beneficiary_name` (text) - Full name of beneficiary
  - `beneficiary_relation` (text) - Relationship to beneficiary
  - `status` (text) - Application status (pending, approved, rejected)
  - `created_at` (timestamptz) - Timestamp of application submission
  - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  
  1. **Row Level Security (RLS)**
     - RLS is enabled on the `applications` table
     - By default, no public access is allowed
  
  2. **Access Policies**
     - Public INSERT policy: Anyone can submit an application (for the public form)
     - No SELECT policy: Only authenticated staff/admins can view applications
     - This prevents unauthorized access to sensitive customer data
  
  ## Important Notes
  - Applications are created with 'pending' status by default
  - All personal information is protected by RLS
  - Only authorized personnel should have SELECT access
  - Consider adding admin authentication and policies in future migrations
*/

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  id_number text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  province text NOT NULL,
  postal_code text NOT NULL,
  coverage_amount text NOT NULL,
  beneficiary_name text NOT NULL,
  beneficiary_relation text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public form submission)
CREATE POLICY "Anyone can submit applications"
  ON applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create index for faster queries on status and created_at
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
