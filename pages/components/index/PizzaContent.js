import Image from 'next/image';

function PizzaContainer() {
  return (
    <div>
      <div className='pizzaContainer'>
        <div className='pizzaText'>
          <h3>Pizzadeig laget på gamle italienske traidisjoner.</h3>
          <p>
            Deigen er basert norske råvarer av beste kvalitet og får en hevetid
            på 72 timer, noe som gjør deigen helt spesiell og ekstremt luftig
          </p>
        </div>
        <div className='pizzaImage'>
          <Image
            src='/images/pizza.jpg'
            alt='Logo'
            width={200}
            height={130}
            layout='responsive'
          ></Image>
        </div>
      </div>
      <div className='pizzaDoughContainer'></div>
      <div className='uknown'></div>
    </div>
  );
}

export default PizzaContainer;
