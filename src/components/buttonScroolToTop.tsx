'use client'
import Image from "next/image";
import LogoImage from '@/assets/icons/logo2.svg';

const ButtonScroolToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <button onClick={scrollToTop}>
      <Image alt="Logo" src={LogoImage} />
    </button>
  );
};

export default ButtonScroolToTop;
