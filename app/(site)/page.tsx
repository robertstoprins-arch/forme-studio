import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith'
import HowItWorks from '@/components/sections/HowItWorks'
import ChooseYourRoute from '@/components/sections/ChooseYourRoute'
import Applications from '@/components/sections/Applications'
import MaterialsStrip from '@/components/sections/MaterialsStrip'
import TrustBlock from '@/components/sections/TrustBlock'
import SpeedAdvantage from '@/components/sections/SpeedAdvantage'
import SelectedWork from '@/components/sections/SelectedWork'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Forme Studio — Bespoke Metalwork & Integrated Finishes',
  description:
    'Bespoke metalwork and integrated finishes — designed properly, made to fit first time. We help joinery firms, designers and contractors turn ideas into fabrication-ready designs.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeWorkWith />
      <HowItWorks />
      <ChooseYourRoute />
      <Applications />
      <MaterialsStrip />
      <TrustBlock />
      <SpeedAdvantage />
      <SelectedWork />
      <FinalCTA />
    </>
  )
}
