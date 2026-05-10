'use client'
import { useState } from 'react'
import { Navbar }         from '@/components/layout/Navbar'
import { HeroSection }    from '@/components/sections/Hero'
import { MarqueeTicker }  from '@/components/ui/Marquee'
import { ProblemSection } from '@/components/sections/Problem'
import { MethodSection }  from '@/components/sections/Method'
import { HorecaSection }  from '@/components/sections/Horeca'
import { ImpactSection }  from '@/components/sections/Impact'
import { TeamSection }    from '@/components/sections/Team'
import { CtaFinal }       from '@/components/sections/CtaFinal'
import { Footer }         from '@/components/layout/Footer'
import { ContactModal }   from '@/components/ui/ContactModal'

export default function HomePage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Navbar onOpen={() => setOpen(true)} />
      <main>
        <HeroSection    onOpen={() => setOpen(true)} />
        <MarqueeTicker />
        <ProblemSection />
        <MethodSection  />
        <HorecaSection  />
        <ImpactSection  />
        <TeamSection    />
        <CtaFinal       onOpen={() => setOpen(true)} />
      </main>
      <Footer onOpen={() => setOpen(true)} />
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
