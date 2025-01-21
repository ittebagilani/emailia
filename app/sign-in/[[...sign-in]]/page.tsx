'use client'

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md px-4">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-none bg-white p-8 rounded-lg",
              input: "bg-white"
            },
          }}
        />
      </div>
    </div>
  )
}

