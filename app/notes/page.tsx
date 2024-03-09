'use client'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
// one way to fetch data using client
export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from('notes').select()
      setNotes(data)
    }
    
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
  