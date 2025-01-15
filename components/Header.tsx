// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import LanguageDropdown from './ui/LanguageDropdown'; // Pastikan path ini sesuai

const Header = () => {
  const t = useTranslations();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDark, setThemeDark] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  let lastScrollY = 0;

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setThemeDark((prev) => !prev);
  };


  useEffect(() => {
    const body = document.body;
    const header = document.getElementById("header") as HTMLElement | null;

    if (themeDark) {
      body.classList.add("bg-gray-900", "text-gray-200");
      body.classList.remove("bg-white", "text-gray-700");
      if (header) {
        header.classList.add("bg-gray-900", "text-gray-200");
        header.classList.remove("bg-white", "text-gray-700");
      }
    } else {
      body.classList.add("bg-white", "text-gray-700");
      body.classList.remove("bg-gray-900", "text-gray-200");
      if (header) {
        header.classList.add("bg-white", "text-gray-700");
        header.classList.remove("bg-gray-900", "text-gray-200");
      }
    }
  }, [themeDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollingDown(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-transform duration-300 shadow-md font-poppins ${
          scrollingDown ? "header-hidden" : "header-visible"
        }`}
        id="header"
      >
        <div className="flex items-center">
          <img
            alt="Company logo"
            className="h-8"
            src="https://placehold.co/50x50"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link className="nav-link" href="/solutions">
            <p className="text-lg">{t('header.solutions')}</p>
          </Link>
          <Link className="nav-link" href="/about">
            <p className="text-lg">{t('header.about')}</p>
          </Link>
          <Link className="nav-link" href="/product">
            <p className="text-lg">{t('header.product')} <i className="fas fa-chevron-down"></i></p>
          </Link>
          <Link className="nav-link" href="/partnership">
            <p className="text-lg">{t('header.partnership')}</p>
          </Link>
          <Link className="nav-link" href="/contact">
            <p className="text-lg">{t('header.contact')}</p>
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="relative text-gray-700 focus:outline-none md:hidden"
            id="menu-button"
            onClick={toggleMobileMenu}
          >
            <div className={`hamburger w-6 h-0.5 bg-gray-700 ${mobileMenuOpen ? 'open' : ''}`}></div>
          </button>
          <button
            className="text-gray-700 focus:outline-none hidden md:block"
            id="theme-toggle"
            onClick={toggleTheme}
          >
            <span className="text-xl">+</span>
          </button>
          <LanguageDropdown 
            selectedLanguage={selectedLanguage} 
            setSelectedLanguage={setSelectedLanguage} 
          />
        </div>
      </header>
      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 transition-transform bg-white shadow-lg ${
          mobileMenuOpen ? "slide-in-left" : "slide-out-left -translate-x-full"
        } md:hidden flex flex-col space-y-4 p-4 z-50`}
        id="mobile-menu"
      >
        <Link className="nav-link" href="/solutions">
          <p className="text-lg">{t('header.solutions')}</p>
        </Link>
        <Link className="nav-link" href="/about">
          <p className="text-lg">{t('header.about')}</p>
        </Link>
        <Link className="nav-link" href="/product">
          <p className="text-lg">{t('header.product')}</p>
        </Link>
        <Link className="nav-link" href="/partnership">
          <p className="text-lg">{t('header.partnership')}</p>
        </Link>
        <Link className="nav-link" href="/contact">
          <p className="text-lg">{t('header.contact')}</p>
        </Link>
        
        <button
          className="text-gray-700 focus:outline-none"
          id="theme-toggle-mobile"
          onClick={toggleTheme}
        >
          <span className="text-xl">+</span>
        </button>
      </nav>
      <style jsx>{`
        .nav-link {
          transition: color 0.3s ease, transform 0.3s ease;
          position: relative; /* Ensure positioning for hover effect */
          margin: 2px;
        }

        p {
          transition: font-size 0.3s, background 2.6s;
          font-size: 0.9rem; /* Ukuran font yang lebih kecil */
        }

        p:hover {
          background: linear-gradient(90deg, rgb(49, 74, 61), rgb(67, 120, 89), rgb(77, 110, 64) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; 
          animation: gradient 4.5s ease infinite;
        }

        p:not(:hover) {
          background: initial;
          -webkit-background-clip: initial;
          -webkit-text-fill-color: initial;
          transition: font-size 0.3s, background 2.6s;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .header-hidden {
          transform: translateY(-100%);
        }

        .header-visible {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Header;