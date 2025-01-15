// components/ui/LanguageDropdown.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Pastikan ini dari 'next/navigation'
import { usePathname } from 'next/navigation';
import '../../styles/globals.css';

interface LanguageDropdownProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Dapatkan pathname saat ini

  // Ambil pilihan bahasa dari localStorage saat komponen dimuat
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    console.log(`Language changed to: ${language}`);
    setLanguageDropdownOpen(false); // Tutup dropdown setelah memilih bahasa

    // Simpan pilihan bahasa di localStorage
    localStorage.setItem('selectedLanguage', language);

    // Mengubah locale di router
    const newLocale = language === "English" ? "en" : language === "Indonesia" ? "id" : "zh";

    // Pastikan newLocale tidak undefined
    if (!newLocale) {
      console.error('Invalid locale:', language);
      return; // Hentikan eksekusi jika locale tidak valid
    }

    // Cek apakah pathname sudah memiliki locale
    const currentLocale = pathname.split('/')[1]; // Ambil locale saat ini dari pathname
    let newPathname = pathname;

    // Jika locale saat ini sama dengan locale baru, tidak perlu mengubah
    if (currentLocale === newLocale) {
      return; // Tidak perlu mengubah URL
    }

    // Jika locale saat ini berbeda, ganti locale di pathname
    newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`); // Ganti locale yang lama dengan yang baru

    // Arahkan ke URL baru
    router.push(newPathname); // Arahkan ke URL baru
  };

  return (
    <div className="relative">
      <button
        className="text-gray-700 focus:outline-none"
        onClick={() => setLanguageDropdownOpen((prev) => !prev)}
      >
        {selectedLanguage} <i className="fas fa-chevron-down"></i>
      </button>
      {languageDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
          <ul className="py-1">
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange("English")}
              >
                English
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange("Indonesia")}
              >
                Indonesia
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange("汉语")}
              >
                汉语
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;