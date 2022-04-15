import Image from 'next/image';

function PizzadoughContent() {
  return (
    <div>
      <div className='pizzadoughContainer'>
        <div className='pizzadoughImage'>
          <Image
            src='/images/dough.jpg'
            alt='Logo'
            width={200}
            height={130}
            layout='responsive'
          ></Image>
        </div>
        <div className='pizzadoughText'>
          <h3>Pizzadeig laget på gamle italienske traidisjoner.</h3>
          <p>
            Deigen er basert norske råvarer av beste kvalitet og får en hevetid
            på 72 timer, noe som gjør deigen helt spesiell og ekstremt luftig
          </p>
        </div>
      </div>
    </div>
  );
}

export default PizzadoughContent;
