import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Marketplace from '@/components/Marketplace';
import Entrepreneurs from '@/components/Entrepreneurs';
import Scalability from '@/components/Scalability';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Marketplace />
      <Entrepreneurs />
      <Scalability />
      <Footer />
    </>
  );
}