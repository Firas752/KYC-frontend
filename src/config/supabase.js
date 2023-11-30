import { SUPABASE_PUBLIC_URL, SUPBASE_URL } from "@/constant/constant";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(SUPBASE_URL, SUPABASE_PUBLIC_URL);

export { supabase };
