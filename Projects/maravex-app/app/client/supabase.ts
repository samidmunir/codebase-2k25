import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.PUBLIC_SUPABASE_URL!;
const supabaseKEY = process.env.PUBLIC_SUPABASE_KEY!;

const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;