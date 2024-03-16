import { createClient } from '@/utils/supabase/server';
import { redirect } from "next/navigation";
import Link from 'next/link';
// one way to fetch data using server
export default async function page() {
  const supabase = createClient();
  
  // authentication
  const {data: { user },} = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login"); // uses nextjs function
  }
  // data fetch and display
  let { data: posts, error } = await supabase.from('posts').select();
  if (error){
    return <div>Error: {String(error)}</div>
  
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
  