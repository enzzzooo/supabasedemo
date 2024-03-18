'use client'
// one more function example to think about
import { useEffect, useState } from 'react'
import {createClient} from '@/utils/supabase/client'

export default function RealtimePosts({ serverPosts }: { serverPosts: any }) {
  const supabase = createClient()
  const [uno, setUno] = useState(serverPosts)
  // here I use uno instead of posts

  useEffect(() => {
    setUno(serverPosts)
  }, [serverPosts])

  useEffect(() => {
    const channel = supabase
      .channel('*')
      // updates automatically without browser refresh
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'uno' }, (payload) =>
        setUno((uno: any) => [...uno, payload.new])
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [serverPosts])

  return <pre>{JSON.stringify(uno, null, 2)}</pre>
}
