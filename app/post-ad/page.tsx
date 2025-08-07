'use client'

import { useState } from 'react';
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
import { Step1Start } from "@/components/post-ad/step1-start";
import { Step2Category } from "@/components/post-ad/step2-category";
import { Step3PropertyInfo } from "@/components/post-ad/step3-property-info";
import { Step4OTPVerification } from "@/components/post-ad/step4-otp-verification";
import { Step5ListingPreview } from "@/components/post-ad/step5-listing-preview";

export type AdType = 'satis' | 'icare';
export type UserType = 'alici' | 'satici';
export type Category = 'ofis' | 'restoran' | 'magaza' | 'anbar' | 'ticaret' | 'biznes' | 'torpaq' | 'qaraj';

export interface AdData {
  userType: UserType;
  adType: AdType;
  category: Category;
  title: string;
  description: string;
  city: string;
  district: string;
  settlement: string;
  address: string;
  area: string;
  rooms: string;
  floors: string;
  condition: 'temirli' | 'temirisiz';
  price: string;
  hasIpoteka: boolean;
  hasCixaris: boolean;
  contactType: 'owner' | 'agent';
  name: string;
  email: string;
  phone: string;
  photos: File[];
}

export default function PostAdPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [adData, setAdData] = useState<Partial<AdData>>({
    userType: 'alici',
    adType: 'satis',
    category: 'restoran',
    hasIpoteka: false,
    hasCixaris: false,
    contactType: 'owner',
    photos: []
  });

  const { isAuthenticated, openLoginModal, logout } = useAuth();

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const updateAdData = (data: Partial<AdData>) => {
    setAdData(prev => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Start adData={adData} updateAdData={updateAdData} onNext={nextStep} />;
      case 2:
        return <Step2Category adData={adData} updateAdData={updateAdData} onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <Step3PropertyInfo adData={adData} updateAdData={updateAdData} onNext={nextStep} onPrev={prevStep} />;
      case 4:
        return <Step4OTPVerification adData={adData} onNext={nextStep} onPrev={prevStep} />;
      case 5:
        return <Step5ListingPreview adData={adData} onPrev={prevStep} />;
      default:
        return <Step1Start adData={adData} updateAdData={updateAdData} onNext={nextStep} />;
    }
  };

  return (
    <div className="bg-white dark:bg-[#111111] text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Obyekt.az
            </Link>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
              <Link href="#" className="hover:text-white">Bütün elanlar</Link>
              <Link href="#" className="hover:text-white">Premium elanlar</Link>
              <Link href="#" className="hover:text-white">Agentliklər</Link>
              <Link href="#" className="hover:text-white">Xəritədə bax</Link>
              <Link href="#" className="hover:text-white">Alıcı elanları</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-300 hover:text-black">
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
                <Button variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-black hover:border-white" onClick={openLoginModal}>
                  <User className="mr-2 h-4 w-4" />
                  Daxil ol
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full">
          {/* Progress indicator */}
          {currentStep < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step <= currentStep 
                        ? 'bg-yellow-400 text-black' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step}
                    </div>
                    {step < 5 && (
                      <div className={`w-12 h-0.5 ${
                        step < currentStep ? 'bg-yellow-400' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {renderStep()}
        </div>
      </main>
    </div>
  );
}
