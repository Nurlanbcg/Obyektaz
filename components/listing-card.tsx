import Link from "next/link";
import Image from "next/image";
import { Heart, Wrench, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { ComponentProps } from "react";

type ListingCardProps = {
  imageUrl: string;
  price: string;
  area: string;
  location: string;
  date: string;
  type: "Satış" | "İcarə";
};

export function ListingCard({ imageUrl, price, area, location, date, type }: ListingCardProps) {
  const badgeVariant: ComponentProps<typeof Badge>["variant"] = type === "Satış" ? "success" : "info";
  
  return (
    <Link href="/listings/1">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group block">
        <div className="relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={location}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
              <Button size="icon" variant="ghost" className="bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8">
                  <Heart className="h-4 w-4" />
              </Button>
          </div>
          <div className="absolute top-2 left-2 flex gap-1">
              <div className="bg-black/30 text-white p-1.5 rounded-md">
                  <Wrench className="h-4 w-4" />
              </div>
              <div className="bg-black/30 text-white p-1.5 rounded-md">
                  <FileText className="h-4 w-4" />
              </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <p className="text-xl font-bold">{price}</p>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">{area}</p>
          </div>
          <p className="mt-1 font-medium">{location}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            <Badge variant={badgeVariant}>{type}</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
