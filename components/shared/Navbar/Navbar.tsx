import Image from 'next/image';
import Link from 'next/link';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

// import MobileNav from './MobileNav';
import GlobalSearch from '../Search/GlobalSearch';
import MobileNav from './MobileNav';
import Theme from './Theme';

const Navbar = () => {
  return (
    <>
      <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevError"
          />
          <p className="h2-bold text-dark100 font-spaceGrotesk dark:text-light-900 max-sm:hidden">
            Dev <span className="text-primary-500">Error</span>
          </p>
        </Link>
        <GlobalSearch />
        <div className="flex-between gap-5">
          <Theme />
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
          <MobileNav /> 
        </div>
      </nav>
    </>
  );
};

export default Navbar;
