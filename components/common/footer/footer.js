import Image from 'next/image';
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Link from 'next/link';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerMain'>
        <div className='footerLogo'>
          <Link href='/'>
            <a>
              <Image
                src='/images/logowhite.svg'
                alt='logo footer'
                width={150}
                height={150}
              ></Image>
            </a>
          </Link>
        </div>
        <div className='footerContent'>
          <div className='openingHours'>
            <h4>Åpningstider</h4>
            <div>
              <p>Onsdag 16-21</p>
              <p>Onsdag 16-21</p>
              <p>Onsdag 16-21</p>
              <p>Onsdag 16-21</p>
              <p>Onsdag 16-21</p>
            </div>
          </div>
          <div className='soMe'>
            <h4>Følg oss på sosiale medier</h4>
            <div className='someIcons'>
              <IconContext.Provider
                value={{ color: 'white', className: 'global-class-name' }}
              >
                <div>
                  <a href='https://www.facebook.com/huslossarpsborg/'>
                    <FaFacebookSquare />
                  </a>
                </div>
              </IconContext.Provider>

              <IconContext.Provider
                value={{ color: 'white', className: 'global-class-name' }}
              >
                <div className='someInstagram'>
                  <a href='https://www.instagram.com/huslospizza/'>
                    <FaInstagramSquare />
                  </a>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className='located'>
            <h4>Du finner oss</h4>
            <div>
              <p>
                Manstad <br /> Lervikveien 28, 1626 Manstad
              </p>
              <p>
                Vikane <br /> Vikaneveien 325, 1621 Gressvik
              </p>
              <p>
                Sarpsborg <br /> St. Marie gate, 1706 Sarpsborg
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>© 2022 All rights reserved Husløs Pizza AS </p>
      </div>
    </div>
  );
}

export default Footer;
