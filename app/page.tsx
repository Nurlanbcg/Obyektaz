import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CategoryTabs } from "@/components/category-tabs";
import { PremiumListings } from "@/components/premium-listings";
import { RegularListings } from "@/components/regular-listings";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#111111] text-gray-900 dark:text-gray-100 font-sans">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryTabs />
          <PremiumListings />
          <RegularListings />
        </div>
      </main>
      <Footer />
    </div>
  );
}
