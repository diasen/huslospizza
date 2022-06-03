import Link from 'next/link';
import Image from 'next/image';
import Authentication from '../../login/authentication';
import { useRouter } from 'next/router';
import Hamburger from '../../hamburger/hamburger';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header>
      <div>
        <Authentication />
      </div>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image
              src='/images/logo.svg'
              alt='Logo'
              width={300}
              height={200}
            ></Image>
          </a>
        </Link>
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
        <div className='hamburger' onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <style jsx>{`
        .navigation {
          width: 100%;
          justify-content: center;
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }
        .hamburger {
          display: none;
          z-index: 6;
        }

        .burger1 {
          color: #fefefe;
        }
        @media (max-width: 767px) {
          .navigation {
            width: 100%;
            justify-content: left;
            background-color: #606d51;
          }

          .hamburger {
            margin-left: 10px;
            display: inline;
            z-index: 0;
            position: inline-block;
            position: absolute;
          }

          .navigation ul {
            display: ${hamburgerOpen ? 'inline' : 'none'};
            background-color: #606d51;
            width: 100%;
            position: relative;
            top: 115px;
          }
        }

        li {
          margin: 20px;
        }
      `}</style>
    </header>
  );
};

export default Header;
