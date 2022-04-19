import Link from 'next/link';

function Herocontent() {
  return (
    <div>
      <h1 className='heroHeading'>Velkommen til Husløs pizza</h1>
      <h3 className='heroSubheading'>
        Se vårt store utvalg av delikate steinovnsbakte pizzaer
      </h3>
      <div className='heroBtnContainer'>
        <Link href='/locations'>
          <a className='heroBtn'>Velg lokasjon</a>
        </Link>
      </div>
    </div>
  );
}

export default Herocontent;