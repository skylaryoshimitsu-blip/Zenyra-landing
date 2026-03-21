import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jqyvppnjogfsccwnetks.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxeXZwcG5qb2dmc2Njd25ldGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMDYzNTMsImV4cCI6MjA3Mjg4MjM1M30.RAw6KAX1loTSSniRQ7ADAblTVZLp2vjvt0j1QTKxq8o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
