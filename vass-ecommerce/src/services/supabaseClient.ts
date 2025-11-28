
import { createClient } from '@supabase/supabase-js'
// Configuración de Supabase
const supabaseUrl = 'https://qmxycsmtzrbokdgdupyf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteHljc210enJib2tkZ2R1cHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMTM0ODUsImV4cCI6MjA3OTY4OTQ4NX0.h2j8pMf9lvKi9Cstc1LQGAI-Ay9f4k8yUnWqXbC7kKQ'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase