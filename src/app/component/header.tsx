"use client";
import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./Search";
import { NavBarList } from "./Constant";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-[#2e302e] text-white h-28 border-b-[1px] border-b-lightText/50 z-50">
      <Container className="h-full flex items-center justify-between gap-5 xl:gap-10">
        <Logo />
        <SearchInput />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 ">
          {NavBarList?.map((item) => (
            <Link key={item?.title} href={item?.link} className="navbarItem">
              {item?.title}
            </Link>
            
          ))}
         
        </div>


        {/* Mobile Menu Icon */}
        <HiMenuAlt2
          className="inline-flex md:hidden cursor-pointer text-2xl hoverEffect hover:text-darkOrange"
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-[#2e302e] text-white z-50 flex flex-col items-center p-5 md:hidden">
            {NavBarList?.map((item) => (
              <Link key={item?.title} href={item?.link} className="navbarItem py-2">
                {item?.title}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
