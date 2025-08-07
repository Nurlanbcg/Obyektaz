'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Search } from 'lucide-react';

export function SearchFilter() {
  const [activeToggle, setActiveToggle] = useState('icare');

  return (
    <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Obyekt tipi</label>
          <Select>
            <SelectTrigger className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-md">
              <SelectValue placeholder="Seçim edin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ofis">Ofis</SelectItem>
              <SelectItem value="restoran">Restoran</SelectItem>
              <SelectItem value="anbar">Anbar</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Ərazi</label>
          <Select>
            <SelectTrigger className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-md">
              <SelectValue placeholder="Seçim edin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="baku">Bakı</SelectItem>
              <SelectItem value="sumqayit">Sumqayıt</SelectItem>
              <SelectItem value="gence">Gəncə</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Qiymət aralığı</label>
          <Select>
            <SelectTrigger className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-md">
              <SelectValue placeholder="Seçim edin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1000">0 - 1,000 AZN</SelectItem>
              <SelectItem value="1000-5000">1,000 - 5,000 AZN</SelectItem>
              <SelectItem value="5000+">5,000+ AZN</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Sahə aralığı</label>
          <Select>
            <SelectTrigger className="w-full bg-gray-100 dark:bg-gray-800 border-none rounded-md">
              <SelectValue placeholder="Seçim edin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">0 - 50 m²</SelectItem>
              <SelectItem value="50-200">50 - 200 m²</SelectItem>
              <SelectItem value="200+">200+ m²</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
          <Button
            onClick={() => setActiveToggle('icare')}
            variant={activeToggle === 'icare' ? 'secondary' : 'ghost'}
            className={`rounded-full px-6 ${activeToggle === 'icare' ? 'bg-white dark:bg-black shadow' : ''}`}
          >
            İcarə
          </Button>
          <Button
            onClick={() => setActiveToggle('satis')}
            variant={activeToggle === 'satis' ? 'secondary' : 'ghost'}
            className={`rounded-full px-6 ${activeToggle === 'satis' ? 'bg-white dark:bg-black shadow' : ''}`}
          >
            Satış
          </Button>
        </div>
        <div className="flex-grow" />
        <Button variant="outline" className="w-full sm:w-auto border-gray-300 dark:border-gray-700">
          <Filter className="mr-2 h-4 w-4" />
          Daha çox filter
        </Button>
        <Button className="w-full sm:w-auto bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300">
          <Search className="mr-2 h-4 w-4" />
          Axtar
        </Button>
      </div>
    </div>
  );
}
