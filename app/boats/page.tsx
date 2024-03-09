import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();
const json = {
    "name": "John Doe",
    "age": 32,
    "email": "johndoe@example.com"
  };
  
  const PrettyJson = () => {
    return (
      <pre>{JSON.stringify(json, null, 2)}</pre>
    );
  };
  return (<> <PrettyJson />
  </>
  );
}