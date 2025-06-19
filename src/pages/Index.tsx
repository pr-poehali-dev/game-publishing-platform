import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import NewsSection from "@/components/NewsSection";
import VKIntegration from "@/components/VKIntegration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GamesSection />
        <NewsSection />
        <VKIntegration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
