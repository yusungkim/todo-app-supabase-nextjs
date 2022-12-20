import { createClient, SupabaseClient } from '@supabase/supabase-js'

declare global {
  var supabase: SupabaseClient | undefined
}

const isProduction = process.env.NODE_ENV === "production"

const client = global.supabase || createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string
)

if (!isProduction) global.supabase = client

export default client