import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, FileText, Wrench, Ruler } from 'lucide-react';
import Image from "next/image";

export function PropertyInfo() {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500"><Building className="mr-2 h-4 w-4" /> Restoran</Badge>
        <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500"><FileText className="mr-2 h-4 w-4" /> Çıxarış</Badge>
        <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500"><Wrench className="mr-2 h-4 w-4" /> Təmirli</Badge>
        <Badge variant="outline" className="py-2 px-4 rounded-full border-green-500 text-green-500"><Ruler className="mr-2 h-4 w-4" /> 196 m²</Badge>
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p>
          Ağ şəhər Mərkəzi bulvar küçədə yerləşən Bobo Construction da 196 m² ibarət obyekt satılır. Hündürlük 6 metr, yarım yelçəkəndir. Bina Ağ şəhərin mərkəzində yerləşir Bayraq meydanına, Sahilyanı kvartala və Bakı buxtasına mənzərə açılır. Məktəb, ticarət və fitnes mərkəzlərindən gəzinti məsafəsində yerləşir.
        </p>
        <h4 className="font-semibold">Binanın üstünlükləri:</h4>
        <ul className="grid grid-cols-2">
          <li>Ekoloji təmiz rayon</li>
          <li>Yeraltı qaraj</li>
          <li>Qapalı həyət</li>
          <li>24 saat təhlükəsizlik xidməti</li>
          <li>Kodlaşdırılmış giriş-çıxış</li>
          <li>Yanğın təhlükəsizlik sistemi</li>
          <li>Müasir tələblərə uyğun geniş liftlər</li>
          <li>Daimi qaz, işıq və su</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 my-6">
        <Badge variant="secondary" className="rounded-full">Ağ şəhər</Badge>
        <Badge variant="secondary" className="rounded-full">Xətai r</Badge>
        <Badge variant="secondary" className="rounded-full">Ağ şəhər q.</Badge>
      </div>
      <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/baku-white-city-map.png" alt="Map" width={64} height={64} className="rounded-lg" />
          <div>
            <p className="font-semibold">Mərkəzi bulvar küçəsi</p>
          </div>
        </div>
        <Button variant="outline" className="rounded-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-600">Xəritədə bax</Button>
      </div>
    </div>
  );
}
