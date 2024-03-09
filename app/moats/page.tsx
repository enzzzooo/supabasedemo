'use client';
import { useState, useEffect } from 'react';

export default function page(){
    const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
    })
  }, [])
  return  (
    <div>
    {items.map((item) => <div key={item.id}> {item.title} </div>)}
    </div>
  )
}