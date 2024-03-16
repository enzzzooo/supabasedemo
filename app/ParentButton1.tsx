'use client'
import {useState } from 'react';
import Button1 from './Button1';
export default function ParentButton1(){
    const [count, setCount] = useState(1);
  
    function handleClick() {
      setCount(count + 1);
    }
    return (
        <>
        <Button1 count={count} onClick={handleClick} />
        <Button1 count={count} onClick={handleClick} />
        </>
    )
  }