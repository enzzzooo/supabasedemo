import { createClient } from '@/utils/supabase/server';
// one way to fetch data using server
export default async function Notes() {
  const supabase = createClient();
  const { data: pagas } = await supabase.from("pagas").select();
  const { error } = await supabase.from('pagas').update({id: 5, cuánto: 3, nombre: "tú" }).select()
  
  const PrettyJson = () =>{
    return (
      <pre>{JSON.stringify(pagas, null, 2)}</pre>
    );
  };
  return <PrettyJson />
}