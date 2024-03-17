import { createClient } from '@/utils/supabase/server';
// server not client this time
import { redirect } from "next/navigation";
import Link from 'next/link';
export default async function page() {
  const supabase = createClient();
  
  // authentication
  const {data: { user }, error: authError} = await supabase.auth.getUser();

  if (!user || authError) {
    return redirect("/login"); // uses nextjs function
  }


  // data fetch and display
  let { data: posts, error: fetchError } = await supabase.from('posts').select();
  if (fetchError){
    return <div>Error: {String(fetchError)}</div>
  // error (which is returned by .select() ) is set to name: fetchError
  }
  return(
    <>
    <Link href="/protected/uploadpost" className="text-blue-500">Upload Posts </Link>
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {posts && posts.map((post) => 
      <div key={post.id}>
        <h1 className="text-2xl font-medium mb-2">{post.title}</h1>
        <p>{post.text} </p>
      </div>)}
    </div>
    </>
  )
}
  