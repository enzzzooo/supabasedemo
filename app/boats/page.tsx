import { createClient } from '@/utils/supabase/server';
// one way to fetch data using server
export default async function Notes() {
  const supabase = createClient();

  
let { data: pagas, error } = await supabase
.from('pagas')
.select('*')
        
  const PrettyJson = () =>{
    return (
      <pre>{JSON.stringify(pagas, null, 2)}</pre>
    );
  };
  return <PrettyJson />
}