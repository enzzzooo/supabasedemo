'use client'
import { useEffect, useState } from 'react'
import {createClient} from '@/utils/supabase/client'
// always createClient for using supabase, client for 'use client'

export default function ClientPosts() {
  // not async function becuase of createClient from client
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<any>([]) // posts is defined here (used in return)
  const supabase = createClient()
  // then create client here

  useEffect(() => {
    const fetchPosts = async () => {
      // but heres the async
      const {data} = await supabase.from('posts').select().csv()
      setPosts(data)
      setIsLoading(false)
    }

    fetchPosts()
  }, [])

  return isLoading ? <p>Loading</p> : <div>{posts}</div>
}