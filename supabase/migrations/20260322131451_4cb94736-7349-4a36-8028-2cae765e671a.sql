CREATE TABLE public.restock_notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  product_name text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.restock_notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit restock notification"
ON public.restock_notifications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can view restock notifications"
ON public.restock_notifications
FOR SELECT
TO authenticated
USING (true);