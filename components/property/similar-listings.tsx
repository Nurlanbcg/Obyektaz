import { ListingCard } from "@/components/listing-card";

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

export function SimilarListings() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Bənzər elanlar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {similarListings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
    </section>
  );
}
