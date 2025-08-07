import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ImageGallery } from "@/components/property/image-gallery";
import { PropertyHeader } from "@/components/property/property-header";
import { PropertyActions } from "@/components/property/property-actions";
import { PropertyInfo } from "@/components/property/property-info";
import { SimilarListings } from "@/components/property/similar-listings";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-white dark:bg-[#111111] text-gray-900 dark:text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertyHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageGallery />
          </div>
          <div>
            <PropertyActions />
          </div>
        </div>
        <PropertyInfo />
        <SimilarListings />
      </main>
      <Footer />
    </div>
  );
}
