import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
