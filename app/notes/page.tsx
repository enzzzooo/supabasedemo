  import { createClient } from '@/utils/supabase/server';

  export default async function Notes() {
    const supabase = createClient();
    const { data: notes } = await supabase.from("notes").select();
  
    // display notes
    return (
      <div>
        {notes && notes.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    );
  }
  