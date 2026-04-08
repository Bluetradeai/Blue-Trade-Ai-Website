import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Industries />
      <Problem />
      <Solution />
      <Services />
      <WhyUs />
      <Process />
      <CTABanner />
      <ContactForm />
      <Footer />
    </>
  );
}
