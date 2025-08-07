'use client'

import Link from "next/link";
import { ArrowUpRight, User, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { isAuthenticated, openLoginModal, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Obyekt.az
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">Bütün elanlar</Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">Premium elanlar</Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">Agentliklər</Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">Xəritədə bax</Link>
            <Link href="#" className="hover:text-gray-900 dark:hover:text-white">Alıcı elanları</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Aze
            </Button>
            <Link href="/post-ad">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full font-semibold">
                Elan yerləşdir
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer h-9 w-9">
                    <AvatarImage src="/diverse-user-avatars.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={logout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Çıxış</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" className="rounded-full border-gray-300 dark:border-gray-700" onClick={openLoginModal}>
                <User className="mr-2 h-4 w-4" />
                Daxil ol
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
