import React, { useState, useEffect } from 'react'


export default function ChildHook({ date }) {
  useEffect(() => {
    console.log("child UseEffect >>>componentDidMount");

  }, [])
  useEffect(() => {
    return () => {
      console.log("child UseEffect >>>componentDidUnMount");
    }
  }, [])
  useEffect(() => {
    console.log("child useEffect , change in props or state", date);
  }, [date])
  useEffect(() => {
    console.log("child useEffect >> componentDidUpdate");
  }, [])

  console.log("render in hooks");
  return (
    <div>Date in Child Hooks:{date}
    </div>
  )
}
