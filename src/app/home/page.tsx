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

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
<ImageSlider/>
<SellingPoints/>
<WhyChooseUs/>
<TechRange/>
<Testimonials/>
<Pricing/>
<Faq />
<Cta/>
    </div>
  )
}

export default HomePage