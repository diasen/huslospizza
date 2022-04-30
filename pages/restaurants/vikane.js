import Head from 'next/head';
import Return from '../../components/return/Return';
import Image from 'next/image';
import Link from 'next/link';

export default function Sarpsborg() {
  return (
    <div>
      <Head>
        <title>Husløs pizza Vikane</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Return />
        <div>
          <h1 className='locationSpesificHeader'>Husløs Pizza avd. Vikane</h1>
          <p className='locationSpesificText'>
            <a href='https://www.google.com/maps/place/Husl%C3%B8s+Pizza+Vikane/@59.2087773,10.8019512,17z/data=!3m1!4b1!4m5!3m4!1s0x4646a9bcb289b32f:0x889cf3e9cfd2955!8m2!3d59.2087745!4d10.804192'>
              Vikaneveien 325, 1621 Gressvik
            </a>
          </p>
          <p className='locationSpesificText'> 900 00 001</p>
          <div className='menuBtnContainer'>
            <Link href='/restaurants/manstad/menu'>
              <a className='menuBtn'>Se vår meny</a>
            </Link>
          </div>
        </div>
        <div>
          <div className='restaurantContent'>
            <div className='mapContent'>
              <Image
                src='/images/manstad.jpg'
                alt='store front'
                layout='responsive'
                height={120}
                width={150}
              />
            </div>
            <div className='restaurantText'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}