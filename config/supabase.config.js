import { createClient } from "@supabase/supabase-js";
import { configDotenv } from "dotenv";

configDotenv();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
