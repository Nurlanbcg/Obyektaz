import { Button } from "@/components/ui/button";
import { Building, Utensils, Store, Warehouse, ShoppingBag, Briefcase, TreePine, Car } from 'lucide-react';
import type { AdData, Category, AdType } from "@/app/post-ad/page";

interface Step2CategoryProps {
  adData: Partial<AdData>;
  updateAdData: (data: Partial<AdData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const categories = [
  { id: 'ofis' as Category, name: 'Ofis', icon: Building },
  { id: 'restoran' as Category, name: 'Restoran', icon: Utensils },
  { id: 'magaza' as Category, name: 'Mağaza', icon: Store },
  { id: 'anbar' as Category, name: 'Anbar', icon: Warehouse },
  { id: 'ticaret' as Category, name: 'Ticarət obyekti', icon: ShoppingBag },
  { id: 'biznes' as Category, name: 'Hazır biznes', icon: Briefcase },
  { id: 'torpaq' as Category, name: 'Torpaq', icon: TreePine },
  { id: 'qaraj' as Category, name: 'Qaraj', icon: Car },
];

export function Step2Category({ adData, updateAdData, onNext, onPrev }: Step2CategoryProps) {
  const handleAdTypeChange = (adType: AdType) => {
    updateAdData({ adType });
  };

  const handleCategorySelect = (category: Category) => {
    updateAdData({ category });
  };

  const handleNext = () => {
    if (adData.category) {
      onNext();
    }
  };
  
  console.log('Initial category:', adData.category);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Obyektin daxil olduğu kateqoriyanı seçin</h1>
        
        {/* Ad Type Toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <Button
              onClick={() => handleAdTypeChange('icare')}
              variant={adData.adType === 'icare' ? 'secondary' : 'ghost'}
              className={`rounded-full px-6 ${adData.adType === 'icare' ? 'bg-white dark:bg-black shadow' : ''}`}
            >
              İcarə
            </Button>
            <Button
              onClick={() => handleAdTypeChange('satis')}
              variant={adData.adType === 'satis' ? 'secondary' : 'ghost'}
              className={`rounded-full px-6 ${adData.adType === 'satis' ? 'bg-white dark:bg-black shadow' : ''}`}
            >
              Satış
            </Button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              variant="outline"
              className={`h-24 flex flex-col items-center justify-center space-y-2 border-2 ${
                adData.category === category.id
                  ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
                  : 'hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
              }`}
            >
              <category.icon className="h-6 w-6" />
              <span className="text-sm font-medium text-center">{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrev}>
            Geri
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!adData.category}
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Davam edin
          </Button>
        </div>
      </div>
    </div>
  );
}
