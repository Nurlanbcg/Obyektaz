'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import type { AdData } from "@/app/post-ad/page";

interface Step4OTPVerificationProps {
  adData: Partial<AdData>;
  onNext: () => void;
  onPrev: () => void;
}

export function Step4OTPVerification({ adData, onNext, onPrev }: Step4OTPVerificationProps) {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp === '123456') {
      onNext();
    } else {
      alert('Yanlış OTP kodu. Düzgün kod: 123456');
    }
  };

  const handleResend = () => {
    alert('Yeni kod göndərildi');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">OTP Kod</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {adData.phone || '051 123 45 67'} nömrəsinə göndərilən təsdiq kodunu daxil edin
        </p>

        <div className="flex justify-center mb-6">
          <InputOTP maxLength={6} value={otp} onChange={setOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className="mb-8">
          <span className="text-black dark:text-gray-100">Kod gəlmədi? </span>
          <button
            onClick={handleResend}
            className="text-yellow-500 hover:text-yellow-600 no-underline"
          >
            Yenidən göndər
          </button>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrev}>
            Geri
          </Button>
          <Button 
            onClick={handleVerify}
            disabled={otp.length !== 6}
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Təsdiq et
          </Button>
        </div>
      </div>
    </div>
  );
}
