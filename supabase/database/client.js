import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project URL and API key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPASBASE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
