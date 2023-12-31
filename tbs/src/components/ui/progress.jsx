import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "src/lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      // style={{ transform: `translateX(-${100 - (value)}%)` }} />
      // style={{transform: `translateX(-${100-(value/max*100)}%)`}}
      style={{transform: `translateX(-${100-(value)}%)`}}

      />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
