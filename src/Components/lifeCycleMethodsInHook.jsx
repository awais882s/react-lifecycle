import React, { useState, useEffect } from 'react'
import LifeCycleInHooksChild from './ChildHooks';


export default function LifeCycleMethodsInHook() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000);
    console.log("Parent UseEffect >>>componentDidMount");

  }, [])
  useEffect(() => {
    return () => {
      console.log("Parent UseEffect >>>componentDidUnMount");
    }
  }, [])
  useEffect(() => {
    console.log("Parent useEffect >> componentDidUpdate");
  }, [])

  console.log("render in hooks");
  return (
    <div>Date in Hook:<p></p> {date}
      <LifeCycleInHooksChild date={date} />
    </div>
  )
}
