import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <div className='header'>
      <div className='logo'>
        <Image
          src='/images/logo.svg'
          alt='Logo'
          width={200}
          height={200}
        ></Image>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <Link href='/'>
              <a className={router.pathname == '/' ? 'active' : 'red'}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/locations'>
              <a className={router.pathname == '/locations' ? 'active' : 'red'}>
                Lokasjoner
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={router.pathname == '/about' ? 'active' : 'red'}>
                Om oss
              </a>
            </Link>
          </li>
          <li>
            <Link href='/companyagreement'>
              <a
                className={
                  router.pathname == '/companyagreement' ? 'active' : 'red'
                }
              >
                Firmaavtale
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
