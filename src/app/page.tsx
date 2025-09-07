"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim()) {
      router.push("/tracker");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-sm bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Selamat Datang</CardTitle>
          <CardDescription>Masuk untuk mulai melacak nomor telepon.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Masukkan username Anda"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700">
              Masuk & Lacak
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
