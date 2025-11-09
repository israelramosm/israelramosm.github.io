'use client';

import { DeepPartial } from '@/src/util/types';
// biome-ignore lint/style/useImportType: Using inside components
import {
  Dropdown,
  FlowbiteNavbarTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from 'flowbite-react';
import Link from 'next/link';

const customNavbarTheme: DeepPartial<FlowbiteNavbarTheme> = {
  root: {
    base: 'p-4 pl-0 pr-0 dark:bg-gray-800 md:flex md:items-center md:justify-between container mx-auto',
  },
};

const NavbarPage = () => (
  <Navbar theme={customNavbarTheme}>
    <NavbarBrand as={Link} href="https://israelramosm.github.io/">
      <span className="whitespace-nowrap pl-4 text-xl font-semibold dark:text-white md:pl-2 lg:pl-0">
        Israel Ramos
      </span>
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <Dropdown arrowIcon={false} inline label="Home">
        <Dropdown.Item as={Link} href="/#experience">
          Experience
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/#education-certifications">
          Education & Certifications
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/#skills">
          Skills
        </Dropdown.Item>
      </Dropdown>
    </NavbarCollapse>
  </Navbar>
);

export default NavbarPage;
