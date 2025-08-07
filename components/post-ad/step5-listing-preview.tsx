import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, ArrowUp, Building, FileText, Wrench, Ruler, Clock } from 'lucide-react';
import Image from "next/image";
import { ListingCard } from "@/components/listing-card";
import type { AdData } from "@/app/post-ad/page";

interface Step5ListingPreviewProps {
  adData: Partial<AdData>;
  onPrev: () => void;
}

const similarListings = [
  { imageUrl: "/cozy-cafe-interior.png", type: "Satış" as const },
  { imageUrl: "/modern-office-exterior.png", type: "İcarə" as const },
  { imageUrl: "/spacious-warehouse.png", type: "Satış" as const },
  { imageUrl: "/luxury-storefront.png", type: "İcarə" as const },
].map(item => ({
  ...item,
  price: "210.000 AZN",
  area: "86 m²",
  location: "İnşaatçılar m.",
  date: "Bakı, bu gün 14:29",
}));

export function Step5ListingPreview({ adData, onPrev }: Step5ListingPreviewProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">
            {adData.title || 'Crescent residence, 196 m² restoran'}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-4">
              <Image 
                src="/new-main-image.png" 
                alt="Property main view" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-full h-28 rounded-lg overflow-hidden">
                  <Image 
                    src={`/restaurant-thumbnail-${i}.png`} 
                    alt={`Thumbnail ${i}`} 
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Actions */}
          <div className="space-y-6">
            <div className="flex justify-end gap-4">
              <Button variant="ghost" className="text-gray-500 dark:text-gray-400">
                <Heart className="mr-2 h-4 w-4" /> Yadda saxla
              </Button>
              <Button variant="ghost" className="text-gray-500 dark:text-gray-400">
                <Share2 className="mr-2 h-4 w-4" /> Paylaş
              </Button>
            </div>

            {/* Moderation Info Panel */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200 p-4 rounded-xl flex items-start gap-4">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Elan yoxlanılır</h4>
                <p className="text-sm">
                  Elanınız moderatorlarımız tərəfindən yoxlanılır. Təsdiqləndikdən sonra saytda dərc olunacaq.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl">
              <p className="text-3xl font-bold mb-4">{adData.price || '3.320.000'} AZN</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {adData.hasCixaris && <Badge variant="success">Çıxarış</Badge>}
                <Badge variant="info">Təmirli</Badge>
                <Badge variant="outline">{adData.adType === 'icare' ? 'İcarə' : 'Satış'}</Badge>
              </div>

              <div className="space-y-2 text-sm border-t border-b border-gray-200 dark:border-gray-700 py-4">
                <div className="flex justify-between">
                  <span>Mülkiyyətçi</span>
                  <span className="font-semibold">{adData.name || 'Elnur'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Nömrəni göstər</span>
                  <span className="font-semibold text-green-500">{adData.phone || '+994 (51) 123 45 ••'}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <Button variant="outline" className="h-auto flex-col items-center justify-center text-xs font-semibold p-2 bg-gray-100 dark:bg-gray-700/50 border-none hover:bg-gray-200 dark:hover:bg-gray-700">
                  <span>VIP et</span>
                  <span className="flex items-center justify-center gap-1 text-green-500">5 AZN <ArrowUp className="h-3 w-3" /></span>
                </Button>
                <Button variant="outline" className="h-auto flex-col items-center justify-center text-xs font-semibold p-2 bg-gray-100 dark:bg-gray-700/50 border-none hover:bg-gray-200 dark:hover:bg-gray-700">
                  <span>Premium et</span>
                  <span className="flex items-center justify-center gap-1 text-green-500">5 AZN <ArrowUp className="h-3 w-3" /></span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Info */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500">
              <Building className="mr-2 h-4 w-4" /> {adData.category || 'Restoran'}
            </Badge>
            {adData.hasCixaris && (
              <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500">
                <FileText className="mr-2 h-4 w-4" /> Çıxarış
              </Badge>
            )}
            <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500">
              <Wrench className="mr-2 h-4 w-4" /> Təmirli
            </Badge>
            <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500">
              <Ruler className="mr-2 h-4 w-4" /> {adData.area || '196'} m²
            </Badge>
          </div>
          
          <div className="prose prose-sm dark:prose-invert max-w-none mb-6">
            <p>{adData.description || 'Ağ şəhər Mərkəzi bulvar küçədə yerləşən Bobo Construction da 196 m² ibarət obyekt satılır. Hündürlük 6 metr, yarım yelçəkəndir.'}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="rounded-full">{adData.city || 'Bakı'}</Badge>
            <Badge variant="secondary" className="rounded-full">{adData.district || 'Xətai r'}</Badge>
            <Badge variant="secondary" className="rounded-full">{adData.settlement || 'Ağ şəhər q.'}</Badge>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/baku-white-city-map.png" alt="Map" width={64} height={64} className="rounded-lg" />
              <div>
                <p className="font-semibold">{adData.address || 'Mərkəzi bulvar küçəsi'}</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-600">
              Xəritədə bax
            </Button>
          </div>
        </div>

        {/* Similar Listings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Bənzər elanlar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarListings.map((listing, index) => (
              <ListingCard key={index} {...listing} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
