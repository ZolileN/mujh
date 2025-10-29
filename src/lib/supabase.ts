import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Supabase client will not be created.');
}

function createNoopClient(): SupabaseClient {
  const handler = {
    get: () => () => {
      return Promise.reject(new Error('Supabase is not configured in this build.'));
    },
  };
  return new Proxy({}, handler) as unknown as SupabaseClient;
}

export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createNoopClient();
