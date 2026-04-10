import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Courses } from '@/components/courses';
import { BusinessPlan } from '@/components/business-plan';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <BusinessPlan />
      <CTA />
      <Footer />
    </div>
  );
}
