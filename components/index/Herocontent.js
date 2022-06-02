import Link from 'next/link';

function Herocontent() {
  return (
    <div className='heroContainer'>
      <h1 className='heroHeading'>Velkommen til Husløs pizza</h1>
      <h3 className='heroSubheading'>
        Se vårt store utvalg av delikate steinovnsbakte pizzaer
      </h3>
      <div className='heroBtnContainer'>
        <Link href='/locations'>
          <a className='heroBtn'>
            <span>Velg lokasjon</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Herocontent;
