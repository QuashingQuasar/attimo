-- Create waitlist table to store form submissions
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact_method TEXT NOT NULL CHECK (contact_method IN ('email', 'phone')),
  contact_value TEXT NOT NULL,
  gdpr_consent BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist form)
CREATE POLICY "Anyone can submit to waitlist"
ON public.waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow authenticated users to view all entries (for admin access)
CREATE POLICY "Authenticated users can view waitlist"
ON public.waitlist
FOR SELECT
TO authenticated
USING (true);

-- Create index on created_at for efficient sorting
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);