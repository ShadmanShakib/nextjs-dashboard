import React from 'react'
import {Avatar,AvatarImage, AvatarFallback} from '@/components/ui'
import { cn } from '@/app/lib/utils'
type Props = {
    message:string;
    currentUser?:boolean;
}

export default function Message({message,currentUser}: Props) {
  return (
    <div>
        <div className={cn("flex mb-2 space-x-5 items-center  w-full justify-end", currentUser? "":" flex-row-reverse gap-5" )}>
        <div className={cn(" mb  px-2 py-1  rounded-md", currentUser?"bg-indigo-500 text-white":"bg-white ")}>
          <p>{message}</p>
        </div>
        <Avatar>
          <AvatarImage src="/cvpic.jpg" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}