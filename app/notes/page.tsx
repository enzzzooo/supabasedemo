  import { createClient } from '@/utils/supabase/server';

  export default async function Notes() {
    const supabase = createClient();
    // const { data: notes } = await supabase.from("notes").select();
    const { data, error } = await supabase
    .from('notes')
    .select();

    if (error) {
        console.error('Error fetching data:', error);
        return;
      }
    console.log(data);
    return <div>{ JSON.stringify(data)}</div>; 
    
  }