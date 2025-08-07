'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Building, Warehouse, Store, Briefcase, Tractor, ParkingSquare } from 'lucide-react';

const categories = [
  { name: "Ofis", icon: Building },
  { name: "Restoran", icon: Building },
  { name: "Anbar", icon: Warehouse },
  { name: "Mağaza", icon: Store },
  { name: "Hazır biznes", icon: Briefcase },
  { name: "Torpaq", icon: Tractor },
  { name: "Qaraj", icon: ParkingSquare },
];

export function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useState("Anbar");

  return (
    <div className="mt-32 mb-12">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            variant={selectedCategory === category.name ? "default" : "secondary"}
            className={`rounded-full whitespace-nowrap ${
              selectedCategory === category.name
                ? "bg-gray-900 text-white dark:bg-gray-200 dark:text-black"
                : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            <category.icon className="mr-2 h-4 w-4" />
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
