import Link from 'next/link';
import Image from 'next/image';
import Authentication from '../../login/authentication';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div>
        <Authentication />
      </div>
      <div className='logo'>
        <Image
          src='/images/logo.svg'
          alt='Logo'
          width={300}
          height={200}
        ></Image>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <Link href='/'>
              <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/locations'>
              <a className={router.pathname == '/locations' ? 'active' : ''}>
                Lokasjoner
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={router.pathname == '/about' ? 'active' : ''}>
                Om oss
              </a>
            </Link>
          </li>
          <li>
            <Link href='/companyagreement'>
              <a
                className={
                  router.pathname == '/companyagreement' ? 'active' : ''
                }
              >
                Firmaavtale
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
