import { ListingCard } from "@/components/listing-card";
import { Button } from "@/components/ui/button";

const premiumListings = [
  {
    imageUrl: "/modern-restaurant-interior.png",
    price: "210.000 AZN",
    area: "86 m²",
    location: "İnşaatçılar m.",
    date: "Bakı, bu gün 14:29",
    type: "İcarə" as const,
  },
  {
    imageUrl: "/busy-asian-night-market.png",
    price: "210.000 AZN",
    area: "86 m²",
    location: "İnşaatçılar m.",
    date: "Bakı, bu gün 14:29",
    type: "Satış" as const,
  },
  {
    imageUrl: "/industrial-warehouse-exterior.png",
    price: "210.000 AZN",
    area: "86 m²",
    location: "İnşaatçılar m.",
    date: "Bakı, bu gün 14:29",
    type: "Satış" as const,
  },
  {
    imageUrl: "/bright-empty-office.png",
    price: "210.000 AZN",
    area: "86 m²",
    location: "İnşaatçılar m.",
    date: "Bakı, bu gün 14:29",
    type: "İcarə" as const,
  },
];

export function PremiumListings() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Premium elanlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {premiumListings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <div className="text-right mt-4">
        <Button variant="link" className="text-yellow-500 hover:text-yellow-600">Daha çox</Button>
      </div>
    </section>
  );
}
