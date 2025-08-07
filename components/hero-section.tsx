import { SearchFilter } from "@/components/search-filter";

export function HeroSection() {
  return (
    <div className="relative h-[500px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/modern-office-hero-background.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          İcarə və Satış üçün obyekt tapmaq indi daha asandır
        </h1>
        <p className="mt-4 max-w-2xl text-gray-300">
          Obyekt.az - sizin üçün uyğun kommersiya əmlaklarını bir platformada birləşdirir. Peşəkar axtarış imkanları və real təkliflərlə əmlak tapmaq və yerləşdirmək indi daha asandır.
        </p>
        <div className="mt-8 flex items-center gap-2">
            <span className="h-2 w-4 rounded-full bg-white"></span>
            <span className="h-2 w-2 rounded-full bg-gray-400"></span>
            <span className="h-2 w-2 rounded-full bg-gray-400"></span>
            <span className="h-2 w-2 rounded-full bg-gray-400"></span>
        </div>
      </div>
      <div className="absolute -bottom-24 left-1/2 w-full max-w-6xl -translate-x-1/2 px-4 z-20">
        <SearchFilter />
      </div>
    </div>
  );
}
