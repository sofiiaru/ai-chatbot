'use client'
import { SignUp } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn, router])

   return (
    <div className="flex justify-center py-24">
      <SignUp afterSignUpUrl='/dashboard' />
    </div>
  );
}