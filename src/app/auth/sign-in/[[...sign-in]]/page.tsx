'use client'
import { SignIn } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}