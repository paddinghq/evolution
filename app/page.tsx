import Image from 'next/image'
import { Button } from '@/components/ui/button'
import LandingPage from './LandingPage'
import SignUp from './(auth)/signup'

export default function Home() {
  return (
    <main>
      <LandingPage />
      <SignUp />
    </main>
  )
}
