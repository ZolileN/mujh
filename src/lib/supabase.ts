import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Supabase client will not be created.');
}

function createNoopClient(): SupabaseClient {
  const error = new Error('Supabase is not configured in this build.');

  // thenable query object that allows chaining (select().eq().maybeSingle() etc.)
  const makeThenableQuery = () => {
    const q: Record<string, (...args: unknown[]) => typeof q> & {
      then: (resolve: (value: { data: null; error: Error }) => void) => void;
      catch: () => typeof q;
    } = {} as Record<string, (...args: unknown[]) => typeof q> & {
      then: (resolve: (value: { data: null; error: Error }) => void) => void;
      catch: () => typeof q;
    };
    const chainMethods = [
      'select', 'insert', 'update', 'delete', 'upsert',
      'maybeSingle', 'single', 'eq', 'order', 'limit', 'range',
      'throwOnError', 'match', 'filter', 'rpc', 'from'
    ];
    chainMethods.forEach((m) => {
      q[m] = () => q;
    });
    // fulfill promise when awaited
    q.then = (resolve: (value: { data: null; error: Error }) => void) => {
      resolve({ data: null, error });
    };
    q.catch = () => q;
    return q;
  };

  const fromFn = () => makeThenableQuery();

  const auth = {
    signIn: () => Promise.resolve({ data: null, error }),
    signUp: () => Promise.resolve({ data: null, error }),
    getUser: () => Promise.resolve({ data: null, error }),
    // other auth methods can be added as needed
  };

  const storage = {
    from: (_bucket: string) => ({
      upload: () => Promise.resolve({ data: null, error }),
      download: () => Promise.resolve({ data: null, error }),
      list: () => Promise.resolve({ data: null, error }),
      remove: () => Promise.resolve({ data: null, error }),
    }),
  };

  // Minimal shape — cast to SupabaseClient to avoid runtime type issues.
  return {
    from: fromFn,
    rpc: () => makeThenableQuery(),
    auth,
    storage,
  } as unknown as SupabaseClient;
}

export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createNoopClient();
