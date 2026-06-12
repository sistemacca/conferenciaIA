// config.js - Parámetros de conexión centralizada con la nube de Supabase
const SUPABASE_URL = "https://wrqvuidcstesrlkwxsfs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndycXZ1aWRjc3Rlc3Jsa3d4c2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MDg1MjMsImV4cCI6MjA5NTk4NDUyM30.TFk0LkHHbrjZtZ5Dma36gSB2dtsv2aQF-lCS0_nTI9I";

// Inicialización del cliente global exponiéndolo de forma segura en la ventana
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseClient = _supabase;