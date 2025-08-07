'use client'

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Upload, X } from 'lucide-react';
import type { AdData } from "@/app/post-ad/page";

interface Step3PropertyInfoProps {
  adData: Partial<AdData>;
  updateAdData: (data: Partial<AdData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Step3PropertyInfo({ adData, updateAdData, onNext, onPrev }: Step3PropertyInfoProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>(adData.photos || []);

  const handleInputChange = (field: keyof AdData, value: any) => {
    updateAdData({ [field]: value });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newFiles = [...uploadedFiles, ...files].slice(0, 30);
    setUploadedFiles(newFiles);
    updateAdData({ photos: newFiles });
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    updateAdData({ photos: newFiles });
  };

  const handleNext = () => {
    // Basic validation
    if (adData.title && adData.description && adData.city && adData.price && uploadedFiles.length >= 3) {
      onNext();
    } else {
      alert('Zəhmət olmasa bütün vacib sahələri doldurun və ən azı 3 şəkil əlavə edin.');
    }
  };

  useEffect(() => {
    if (adData.city !== 'baku') {
      updateAdData({ district: '', settlement: '' });
    }
  }, [adData.city]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Obyekt ilə bağlı məlumatları əlavə edin</h1>
        
        {/* Ad Type Display */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-yellow-100 dark:bg-yellow-900/20 px-4 py-2 rounded-full">
            <span className="font-semibold">{adData.adType === 'icare' ? 'İcarə' : 'Satış'}</span>
          </div>
        </div>

        <div className="space-y-8">
          {/* Basic Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Əsas məlumatlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Başlıq *</Label>
                <Input
                  id="title"
                  value={adData.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Məsələn: Mərkəzdə ofis icarəsi"
                />
              </div>
              <div>
                <Label htmlFor="city">Şəhər *</Label>
                <Select value={adData.city || ''} onValueChange={(value) => handleInputChange('city', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Şəhər seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baku">Bakı</SelectItem>
                    <SelectItem value="gence">Gəncə</SelectItem>
                    <SelectItem value="sumqayit">Sumqayıt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {adData.city === 'baku' && (
                <>
                  <div>
                    <Label htmlFor="district">Rayon</Label>
                    <Select value={adData.district || ''} onValueChange={(value) => handleInputChange('district', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Rayon seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="binagadi">Binəqədi rayonu</SelectItem>
                        <SelectItem value="garadag">Qaradağ rayonu</SelectItem>
                        <SelectItem value="narimanov">Nərimanov rayonu</SelectItem>
                        <SelectItem value="nasimi">Nəsimi rayonu</SelectItem>
                        <SelectItem value="nizami">Nizami rayonu</SelectItem>
                        <SelectItem value="sabunchu">Sabunçu rayonu</SelectItem>
                        <SelectItem value="sabail">Səbail rayonu</SelectItem>
                        <SelectItem value="surakhani">Suraxanı rayonu</SelectItem>
                        <SelectItem value="pirallahi">Pirallahı rayonu</SelectItem>
                        <SelectItem value="xatai">Xətai rayonu</SelectItem>
                        <SelectItem value="khazar">Xəzər rayonu</SelectItem>
                        <SelectItem value="yasamal">Yasamal rayonu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="settlement">Qəsəbə</Label>
                    <Input
                      id="settlement"
                      value={adData.settlement || ''}
                      onChange={(e) => handleInputChange('settlement', e.target.value)}
                      placeholder="Qəsəbə"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="mt-4">
              <Label htmlFor="description">Təsvir *</Label>
              <Textarea
                id="description"
                value={adData.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Obyekt haqqında ətraflı məlumat..."
                rows={4}
              />
            </div>
          </div>

          {/* Property Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Obyekt detalları</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="area">Sahə (m²) *</Label>
                <Input
                  id="area"
                  type="number"
                  min="0"
                  value={adData.area || ''}
                  onChange={(e) => handleInputChange('area', e.target.value)}
                  placeholder="196"
                />
              </div>
              <div>
                <Label htmlFor="rooms">Otaq sayı</Label>
                <Input
                  id="rooms"
                  type="number"
                  min="0"
                  value={adData.rooms || ''}
                  onChange={(e) => handleInputChange('rooms', e.target.value)}
                  placeholder="3"
                />
              </div>
              <div>
                <Label htmlFor="floors">Mərtəbə sayı</Label>
                <Input
                  id="floors"
                  type="number"
                  min="0"
                  value={adData.floors || ''}
                  onChange={(e) => handleInputChange('floors', e.target.value)}
                  placeholder="2"
                />
              </div>
            </div>
            <div className="mt-4">
              <Label>Vəziyyət</Label>
              <RadioGroup 
                value={adData.condition || 'temirli'} 
                onValueChange={(value) => handleInputChange('condition', value)}
                className="flex space-x-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="temirli" id="temirli" />
                  <Label htmlFor="temirli">Təmirli</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="temirisiz" id="temirisiz" />
                  <Label htmlFor="temirisiz">Təmirisiz</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Photos/Videos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Şəkillər/Videolar</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                      Şəkil və ya video əlavə edin
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                    />
                  </label>
                  <p className="mt-1 text-xs text-gray-500">
                    Minimum 3, maksimum 30 fayl. PNG, JPG, MP4 formatları dəstəklənir.
                  </p>
                </div>
              </div>
            </div>
            {uploadedFiles.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-4">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-center p-2">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Qiymət məlumatları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Qiymət (AZN) *</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  value={adData.price || ''}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  placeholder="3320000"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ipoteka"
                  checked={adData.hasIpoteka || false}
                  onCheckedChange={(checked) => handleInputChange('hasIpoteka', checked)}
                />
                <Label htmlFor="ipoteka">İpoteka var</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cixaris"
                  checked={adData.hasCixaris || false}
                  onCheckedChange={(checked) => handleInputChange('hasCixaris', checked)}
                />
                <Label htmlFor="cixaris">Çıxarış var</Label>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Əlaqə məlumatları</h3>
            <RadioGroup 
              value={adData.contactType || 'owner'} 
              onValueChange={(value) => handleInputChange('contactType', value)}
              className="mb-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="owner" id="owner" />
                <Label htmlFor="owner">Elanın sahibi</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="agent" id="agent" />
                <Label htmlFor="agent">Mən vasitəçiyəm</Label>
              </div>
            </RadioGroup>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="name">Ad *</Label>
                <Input
                  id="name"
                  value={adData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Adınız"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={adData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={adData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="051 123 45 67"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onPrev}>
            Geri
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Davam edin
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          Elan yerləşdirərək, siz obyekt.az-ın istifadəçi razılaşması və qaydaları ilə razı olduğunuzu təsdiq edirsiniz
        </p>
      </div>
    </div>
  );
}
