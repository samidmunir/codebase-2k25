import { createClient } from '@supabase/supabase-js';

// const supabaseURL = process.env.PUBLIC_SUPABASE_URL!;
// const supabaseKEY = process.env.PUBLIC_SUPABASE_KEY!;

const supabaseURL = 'https://lazzlzvjeyafuuwccfib.supabase.co'
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhenpsenZqZXlhZnV1d2NjZmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczMDcwMjEsImV4cCI6MjA1Mjg4MzAyMX0.z3Eyn9iPCcjl9KX5b3vYHQ4XqACKKXHhW8sAedEPOxk'

const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;