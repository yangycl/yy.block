import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://vfqedrijjknhydradytf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcWVkcmlqamtuaHlkcmFkeXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5ODM5MjIsImV4cCI6MjA3MTU1OTkyMn0.ipt6AD1IwN0XxMqPWggGx_543dnAIbkaYeLzidj5cFA'
);
