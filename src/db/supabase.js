
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URL || Deno.env.get("SUPABASE_URL");
const supabaseKey = import.meta.env.SUPABASE_KEY || Deno.env.get("SUPABASE_KEY");

export const supabase = createClient(supabaseUrl, supabaseKey);
        