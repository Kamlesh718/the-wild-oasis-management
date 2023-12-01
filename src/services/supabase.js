import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pystukwwvchxyazqvftq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5c3R1a3d3dmNoeHlhenF2ZnRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NjI4MjgsImV4cCI6MjAxNTUzODgyOH0._uSRcTj72OcfVCUTRJcH7QW_oVt1_uugYKHeIYMCz40";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
