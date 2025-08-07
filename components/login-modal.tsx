'use client';

import { useState } from 'react';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Phone } from 'lucide-react';

export function LoginModal() {
  const { isLoginModalOpen, closeLoginModal, login } = useAuth();
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send an OTP to the phoneNumber
    console.log(`Sending OTP to ${phoneNumber}`);
    setStep(2);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would verify the OTP. We'll simulate success with "123456".
    if (otp === '123456') {
      console.log('OTP verified successfully');
      login();
      handleClose();
    } else {
      alert('Yanlış OTP kodu. Düzgün kod: 123456'); // Incorrect OTP. Correct code: 123456
    }
  };
  
  const handleClose = () => {
    closeLoginModal();
    // Reset state after closing animation
    setTimeout(() => {
        setStep(1);
        setPhoneNumber('');
        setOtp('');
    }, 300);
  }

  return (
    <Dialog open={isLoginModalOpen} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Daxil ol</DialogTitle>
          <DialogDescription className="text-center">
            {step === 1 ? 'Mobil nömrənizi daxil edin' : `Təsdiq kodu ${phoneNumber} nömrəsinə göndərildi`}
          </DialogDescription>
        </DialogHeader>
        {step === 1 && (
          <form onSubmit={handlePhoneNumberSubmit}>
            <div className="grid gap-4 py-4">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="050 123 45 67"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Davam et
              </Button>
            </DialogFooter>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <div className="grid gap-4 py-4">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)}>
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
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Təsdiq et
              </Button>
            </DialogFooter>
            <div className="text-center mt-4">
                <Button variant="link" onClick={() => setStep(1)} className="text-sm text-gray-500 dark:text-gray-400">
                    Nömrəni dəyiş
                </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
