import { Button } from "@/components/ui/button";
import { DollarSign, Zap } from 'lucide-react';
import type { AdData, AdType, UserType } from "@/app/post-ad/page";

interface Step1StartProps {
  adData: Partial<AdData>;
  updateAdData: (data: Partial<AdData>) => void;
  onNext: () => void;
}

export function Step1Start({ adData, updateAdData, onNext }: Step1StartProps) {
  const handleUserTypeChange = (userType: UserType) => {
    updateAdData({ userType });
  };

  const handleAdTypeSelect = (adType: AdType) => {
    updateAdData({ adType });
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Elan yerləşdir</h1>
        
        {/* User Type Toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <Button
              onClick={() => handleUserTypeChange('alici')}
              variant={adData.userType === 'alici' ? 'secondary' : 'ghost'}
              className={`rounded-full px-6 ${adData.userType === 'alici' ? 'bg-white dark:bg-black shadow' : ''}`}
            >
              Alıcı
            </Button>
            <Button
              onClick={() => handleUserTypeChange('satici')}
              variant={adData.userType === 'satici' ? 'secondary' : 'ghost'}
              className={`rounded-full px-6 ${adData.userType === 'satici' ? 'bg-white dark:bg-black shadow' : ''}`}
            >
              Satıcı
            </Button>
          </div>
        </div>

        {/* Ad Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button
            onClick={() => handleAdTypeSelect('satis')}
            variant="outline"
            className="h-32 flex flex-col items-center justify-center space-y-4 border-2 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
          >
            <DollarSign className="h-12 w-12 text-green-500" />
            <span className="text-xl font-semibold">Satış</span>
          </Button>
          
          <Button
            onClick={() => handleAdTypeSelect('icare')}
            variant="outline"
            className="h-32 flex flex-col items-center justify-center space-y-4 border-2 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
          >
            <Zap className="h-12 w-12 text-blue-500" />
            <span className="text-xl font-semibold">İcarə</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
