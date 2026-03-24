
CREATE TABLE public.shipping_expansion_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  country_code text NOT NULL,
  country_name text,
  product_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.shipping_expansion_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit shipping expansion request"
  ON public.shipping_expansion_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view shipping expansion requests"
  ON public.shipping_expansion_requests
  FOR SELECT
  TO authenticated
  USING (true);
