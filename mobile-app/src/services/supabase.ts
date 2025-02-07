// src/services/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlpotaarfkskplfgkwxh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhscG90YWFyZmtza3BsZmdrd3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyOTIxNTQsImV4cCI6MjA1MTg2ODE1NH0.FCsPkSrNUEF9fpZCR_iuU4U7_ul9px_HLM42XDVNiO4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
