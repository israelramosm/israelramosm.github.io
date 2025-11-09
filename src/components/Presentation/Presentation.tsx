'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Tooltip } from 'flowbite-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { FaSquarePhone } from 'react-icons/fa6';
import { IMAGE_PATH } from '@/src/util/constants';

const phoneNumber = 3411362414;
const email = 'a.ramos.israel.m@gmail.com';
const linkedin = 'https://www.linkedin.com/in/israel-ramos/';
const github = 'https://github.com/israelramosm';

const contactInformation = [
  {
    name: 'Gmail',
    value: email,
    link: `mailto:${email}`,
    icon: <MdEmail className="size-8 lg:size-14" />,
  },
  {
    name: 'LinkedIn',
    value: linkedin,
    link: linkedin,
    icon: <FaLinkedin className="size-6 lg:size-12" />,
  },
  {
    name: 'Phone Number',
    value: `+52 ${phoneNumber}`,
    link: `tel:${phoneNumber}`,
    icon: <FaSquarePhone className="size-6 lg:size-12" />,
  },
  {
    name: 'Github',
    value: github,
    link: github,
    icon: <FaGithub className="size-6 lg:size-12" />,
  },
];

export default function Presentation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // TODO: add animation after I develop all the components
    // TODO: Make it sticky after scroll
    // console.log(scrollY);
  }, [scrollY]);

  return (
    <section className="my-5 flex h-96 flex-col justify-end pb-4 shadow-xl shadow-black md:flex-row md:py-6">
      <div className="order-2 flex w-full flex-col items-center justify-center md:mr-8 md:items-end md:justify-end">
        <header className="order-2 mt-3 flex flex-col items-center md:mt-0 md:items-end md:justify-end">
          <h1 className="text-base font-bold text-white drop-shadow-lg md:text-[1.25rem] lg:text-[1.5rem]">
            Arnulfo Israel Ramos Magaña
          </h1>
          <h2 className="text-[.75rem] font-semibold text-gray-100 drop-shadow-md md:text-[1rem] lg:text-[1.25rem]">
            Fullstack Application Developer
          </h2>
        </header>
        <div className="order-3 mt-3 flex w-2/4 items-center justify-evenly md:justify-end">
          {contactInformation.map((info, i) => (
            <div key={i} className="md:ml-8">
              <Tooltip content={info.value}>
                <Link 
                  href={info.link}
                  className="text-white transition-colors duration-200 hover:text-gray-200"
                >
                  {info.icon}
                </Link>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      <div className="order-1 flex w-full basis-1/4 items-center justify-center md:items-end">
        <Image
          className="size-24 rounded-full border-4 border-white shadow-xl lg:size-32"
          src={`${IMAGE_PATH}/images/profile.png`}
          alt="Profile"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
