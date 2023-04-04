import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iimsizhtfepbtylyyblb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpbXNpemh0ZmVwYnR5bHl5YmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNTYwMjgsImV4cCI6MTk5MzczMjAyOH0.gwFQWwvm3bZMWV4Ghv3L0EPw5ccLDIF22YHDmz1zz0Q'

export const supabase = createClient(supabaseUrl, supabaseKey)