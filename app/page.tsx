import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsBar from "@/components/stats-bar"
import ProductsSection from "@/components/products-section"
import RentalSection from "@/components/rental-section"
import UseCasesSection from "@/components/use-cases-section"
import WhyUsSection from "@/components/why-us-section"
import HowToBuySection from "@/components/how-to-buy-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ProductsSection />
        <RentalSection />
        <UseCasesSection />
        <WhyUsSection />
        <HowToBuySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
