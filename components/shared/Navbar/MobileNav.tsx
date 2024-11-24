'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={`${
              isActive
                ? `primary-gradient rounded-lg text-light-900`
                : `text-dark300_light900`
            } flex items-center justify-start gap-4 bg-transparent p-4`}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${isActive ? '' : 'invert-colors'}`}
            />
            <p className={`${isActive ? 'base-color' : 'base-medium'}`}>
              {item.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="Mobile Menu"
            width={36}
            height={36}
            className="invert-colors sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="background-light900_dark200 border-none">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-1 mb-6">
            <Image
              src="/assets/images/site-logo.svg"
              width={23}
              height={23}
              alt="DevError"
            />
            <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
              Dev <span className="text-primary-500">Error</span>
            </p>
          </Link>

          {/* Navigation Content */}
          <NavContent />

          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: { avatarBox: 'h-10 w-10' },
                variables: { colorPrimary: '#ff7000' },
              }}
            />
          </SignedIn>

        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
