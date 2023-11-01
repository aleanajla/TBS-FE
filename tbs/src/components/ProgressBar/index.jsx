// import * as React from "react"
import React, {useState, useEffect} from 'react'
import { Progress } from "src/components/ui/progress"

export function ProgressBar({value, max}) {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    // let valueMax = value/max
    const timer = setTimeout(() => setProgress(value), 500)
    
    return () => clearTimeout(timer)
  }, [])


  return <Progress value={progress} max={max} className="w-[100%]" />
}
