'use client'

import { useEffect, useState } from 'react'
import {createClient} from '@/utils/supabase/client'
// always createClient for using supabase, client for 'use client'

export default function ClientPosts() {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<any>([])
  const supabase = createClient()
  // then create client here
  
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from('posts').select()
      setPosts(data)
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  return isLoading ? <p>Loading</p> : <pre>{JSON.stringify(posts, null, 2)}</pre>
}