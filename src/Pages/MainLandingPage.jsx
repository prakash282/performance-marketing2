
import HeroSection from "../Components/HeroSection"
import FounderGuaranteeSection from "../Components/FounderGuaranteeSection"
import AuditComparisonTable from "../Components/AuditComparisonTable"
import OfferTimer from "../Components/OfferTimer"
import ScrollSections from "../Components/ScrollSections"
import AnimatedSection from "../Components/AnimatedSection"
import AnimatedCards from "../Components/AnimatedCards"
import TestimonialUI from "../Components/TestimonialUI"
import FounderSection from "../Components/FounderSection"

const MainLandingPage = () => {
  return (
    <div>
      <HeroSection />
      <ScrollSections/>
      <AnimatedCards/>
      <AnimatedSection/>
      {/* <FounderGuaranteeSection/> */}
      <FounderSection/>
      <AuditComparisonTable/>
      <TestimonialUI/>
      <OfferTimer/>
    </div>
  )
}

export default MainLandingPage
