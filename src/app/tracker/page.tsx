'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface TrackResult {
  provider: string;
  country: string;
  city: string;
  status: string;
}

export default function TrackerPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackResult | null>(null);
  const router = useRouter();

  const handleTrack = () => {
    if (phoneNumber.trim()) {
      setIsLoading(true);
      setResult(null);
      setTimeout(() => {
        setResult({
          provider: 'By U',
          country: 'Indonesia',
          city: 'Cokrombedog,sidoarum,sleman (Perkiraan)',
          status: 'Aktif',
        });
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Pelacak Nomor Telepon</CardTitle>
          <CardDescription>Masukkan nomor telepon untuk memulai pelacakan.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              type="tel"
              placeholder="Contoh: 081234567890"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <Button onClick={handleTrack} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              {isLoading ? 'Melacak...' : 'Lacak'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="mt-6 text-center">
          <p>Mencari sinyal satelit dan melacak lokasi...</p>
          <div className="w-16 h-16 mx-auto mt-4 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>
      )}

      {result && (
        <Card className="w-full max-w-md mt-6 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl text-white">Hasil Pelacakan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-300">
            <p><strong>Provider:</strong> {result.provider}</p>
            <p><strong>Negara:</strong> {result.country}</p>
            <p><strong>Lokasi:</strong> {result.city}</p>
            <p><strong>Status:</strong> <span className="text-green-400">{result.status}</span></p>
          </CardContent>
        </Card>
      )}

      <Button onClick={() => router.push('/')} variant="link" className="mt-8 text-gray-400">
        Kembali ke Login
      </Button>
    </main>
  );
}
