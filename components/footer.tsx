import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Send, Linkedin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-white">Obyekt.az</h3>
            <p>8 Noyabr, 25 E</p>
            <p>Ağ şəhər ofis binası, 47 ofis</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white"><Facebook /></Link>
              <Link href="#" className="hover:text-white"><Instagram /></Link>
              <Link href="#" className="hover:text-white"><Send /></Link>
              <Link href="#" className="hover:text-white"><Linkedin /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <Link href="#" className="block hover:text-white">Haqqımızda</Link>
              <Link href="#" className="block hover:text-white">FAQ</Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block hover:text-white">Alıcı elanları</Link>
              <Link href="#" className="block hover:text-white">Satıcı elanları</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Ən son elanlardan xəbərdar ol</h4>
            <form className="flex">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-white/20 rounded-r-none rounded-l-full focus:ring-yellow-400 focus:border-yellow-400 flex-grow"
              />
              <Button type="submit" size="icon" className="bg-transparent border border-l-0 border-white/20 text-white hover:bg-white/10 rounded-l-none rounded-r-full">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>©2025 Obyekt.az. Bütün hüquqlar qorunur</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white">İstifadə qaydaları</Link>
            <Link href="#" className="hover:text-white">Məxfilik siyasəti</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
