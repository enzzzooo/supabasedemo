import {createClient} from '@/utils/supabase/server'
import RealtimePosts from './RealTimePosts'

export const revalidate = 0

export default async function Realtime() {
    const supabase = createClient()
    // have to do createClient() = supabase everytime
  const { data } = await supabase.from('uno').select('*')
  return <RealtimePosts serverPosts={data} />
}
