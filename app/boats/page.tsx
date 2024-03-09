import { createClient } from '@/utils/supabase/server';
// one way to fetch data using server
export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();
  
  const PrettyJson = () =>{
    return (
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    );
  };
  return <PrettyJson />
}