import React, { useState, useEffect } from 'react'

export default function LifeCycleMethodsInHook() {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setDate(new Date().toLocaleTimeString());
    console.log("UseEffect >>>componentDidMount");

  }, [])
  useEffect(() => {
    return () => {
      console.log("UseEffect >>>componentDidUnMount");
    }
  }, [])
  useEffect(() => {
    console.log("UseEffect >>>componentDidUnMount");
  }, [date])
  console.log("render in hooks");
  return (
    <div>Date in Hook:<p></p> {date}</div>
  )
}
