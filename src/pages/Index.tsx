import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Stats from "@/components/Stats";
import EmailNotify from "@/components/EmailNotify";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Background />
      
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 py-8">
        <Hero />
        <Countdown />
        <Stats />
        <EmailNotify />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
