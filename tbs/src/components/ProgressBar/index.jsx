import React, {useState, useEffect} from 'react'
import { Progress } from "src/components/ui/progress"

export function ProgressBar({value, max}) {
  const [progress, setProgress] = useState(0)
  let total = null

  total = (value/max)*100
  
  useEffect(() => {
    // let valueMax = value/max
    const timer = setTimeout(() => setProgress(value), max)
    // const progress = (value/max)*100
    
    return () => clearTimeout(timer)
  }, [])


  return <Progress value={total} className="w-[100%]"/>
}