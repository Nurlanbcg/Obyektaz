import { Button } from "@/components/ui/button";
import { Heart, Share2, ArrowUp, CheckCircle } from 'lucide-react';

export function PropertyActions() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-4">
        <Button variant="ghost" className="text-gray-500 dark:text-gray-400">
          <Heart className="mr-2 h-4 w-4" /> Yadda saxla
        </Button>
        <Button variant="ghost" className="text-gray-500 dark:text-gray-400">
          <Share2 className="mr-2 h-4 w-4" /> Paylaş
        </Button>
      </div>
      <div className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-xl">
        <p className="text-3xl font-bold mb-4">3.320.000 AZN</p>
        <div className="space-y-2 text-sm border-t border-b border-gray-200 dark:border-gray-700 py-4">
          <div className="flex justify-between">
            <span>Mülkiyyətçi</span>
            <span className="font-semibold">Elnur</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Nömrəni göstər</span>
            <span className="font-semibold text-green-500">+994 (51) 123 45 ••</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 text-center text-xs font-semibold">
          <div className="bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg">
            <p>İrəli çək</p>
            <p className="flex items-center justify-center gap-1 text-green-500">1 AZN <ArrowUp className="h-3 w-3" /></p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg">
            <p>VIP et</p>
            <p className="flex items-center justify-center gap-1 text-green-500">3 AZN <ArrowUp className="h-3 w-3" /></p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700/50 p-2 rounded-lg">
            <p>Premium</p>
            <p className="flex items-center justify-center gap-1 text-green-500">5 AZN <ArrowUp className="h-3 w-3" /></p>
          </div>
        </div>
      </div>
    </div>
  );
}
