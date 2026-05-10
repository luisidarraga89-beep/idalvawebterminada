'use client'
import { useState } from 'react'
import { Navbar }      from '@/components/layout/Navbar'
import { Hero }        from '@/components/sections/Hero'
import { Marquee }     from '@/components/sections/Marquee'
import { Problem }     from '@/components/sections/Problem'
import { Philosophy }  from '@/components/sections/Philosophy'
import { System }      from '@/components/sections/System'
import { AboutFull }   from '@/components/sections/AboutFull'
import { CaseStudy }   from '@/components/sections/CaseStudy'
import { Team }        from '@/components/sections/Team'
import { Values }      from '@/components/sections/Values'
import { CtaFinal }    from '@/components/sections/CtaFinal'
import { Footer }      from '@/components/layout/Footer'
import { ContactModal } from '@/components/ui/ContactModal'

export default function HomePage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Navbar onOpen={() => setOpen(true)} />
      <main>
        <Hero       onOpen={() => setOpen(true)} />
        <Marquee />
        <Problem />
        <Philosophy />
        <System />
        <AboutFull />
        <CaseStudy  onOpen={() => setOpen(true)} />
        <Team />
        <Values />
        <CtaFinal   onOpen={() => setOpen(true)} />
      </main>
      <Footer onOpen={() => setOpen(true)} />
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
