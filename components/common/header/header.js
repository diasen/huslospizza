import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header>
    <div className='logo'>
      <Image src='/images/logo.svg' alt='Logo' width={200} height={200}></Image>
    </div>
    <div className='navigation'>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/locations'>
            <a>Lokasjoner</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>Om oss</a>
          </Link>
        </li>
        <li>
          <Link href='/companyagreement'>
            <a>Firmaavtale</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Sign Out</a>
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
