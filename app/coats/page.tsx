import { createClient } from '@/utils/supabase/server';
export default async function Coats() {
    const supabase = createClient();
    const { data: coats  } = await supabase.from('pagas').select();

    return (
        <> 
            {coats && coats.map((coats) => <div key={coats.id} className=" accent-lime-50"> {coats.nombre} </div>)}
        </>
    );
}