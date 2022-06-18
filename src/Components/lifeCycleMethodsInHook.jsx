import React, { useState, useEffect } from 'react'
import LifeCycleInHooksChild from './ChildHook';


export default function LifeCycleMethodsInHook() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000);
    console.log("UseEffect >>>componentDidMount");

  }, [])
  useEffect(() => {
    return () => {
      console.log("UseEffect >>>componentDidUnMount");
    }
  }, [])

  console.log("render in hooks");
  return (
    <div>Date in Hook:<p></p> {date}
      <LifeCycleInHooksChild date={date} />
    </div>
  )
}
