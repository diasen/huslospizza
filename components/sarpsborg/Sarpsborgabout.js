import Link from 'next/link';

function Sarpsborgabout() {
  return (
    <div className='sarpsborgContent'>
      <div className='maps'>google maps</div>
      <div className='story'>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <Link href='https://www.pizzabakeren.no/menyPDF'>
          <a className='menuSarpsborgBtn'>Se meny</a>
        </Link>
      </div>
    </div>
  );
}

export default Sarpsborgabout;
