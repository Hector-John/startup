import React from 'react'
import HeroSection from './HeroSection'
import ImageSlider from '@/components/ui/slider'
import SellingPoints from './SellingPoints'
import WhyChooseUs from './WhyChooseUs'
import TechRange from './TechRange'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import Cta from '@/components/Cta'
import { CompanyMarquee } from '@/components/CompanyMarquee'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ImageSlider />
      <SellingPoints />
      <WhyChooseUs />
      <TechRange />
      <Testimonials />
      <CompanyMarquee marqueeSpeed={70} />
      <Pricing />
      <Faq />
      <Cta />
    </div>
  )
}

export default HomePage