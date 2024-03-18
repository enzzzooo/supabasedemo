'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
// ugh this is the one that blinks when you load from async
export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])
// compare to 'unomas', this doesn't update automatically when data in db is changed
  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}