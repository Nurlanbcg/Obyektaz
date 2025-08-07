import { ListingCard } from "@/components/listing-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from 'lucide-react';

const regularListings = [
    { imageUrl: "/cozy-cafe-interior.png", type: "Satış" as const },
    { imageUrl: "/modern-office-exterior.png", type: "İcarə" as const },
    { imageUrl: "/spacious-warehouse.png", type: "Satış" as const },
    { imageUrl: "/luxury-storefront.png", type: "İcarə" as const },
    { imageUrl: "/suburban-house.png", type: "Satış" as const },
    { imageUrl: "/minimalist-white-house.png", type: "İcarə" as const },
    { imageUrl: "/modern-glass-house-forest.png", type: "Satış" as const },
    { imageUrl: "/small-wooden-birdhouse.png", type: "İcarə" as const },
].map(item => ({
    ...item,
    price: "210.000 AZN",
    area: "86 m²",
    location: "İnşaatçılar m.",
    date: "Bakı, bu gün 14:29",
}));


export function RegularListings() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Elanlar (1234)</h2>
        <Select>
            <SelectTrigger className="w-[180px] bg-gray-100 dark:bg-gray-800 border-none rounded-full">
                <SelectValue placeholder="Ən yenilər" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="newest">Ən yenilər</SelectItem>
                <SelectItem value="price-asc">Qiymət (artan)</SelectItem>
                <SelectItem value="price-desc">Qiymət (azalan)</SelectItem>
            </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {regularListings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <div className="text-right mt-4">
        <Button variant="link" className="text-yellow-500 hover:text-yellow-600">Daha çox</Button>
      </div>
    </section>
  );
}
