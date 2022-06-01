import { useState, useEffect } from 'react';
import { BASE_URL } from '../../config/config';

export default function Menu() {
  const [pizzamanstads, setPizzas] = useState([]);

  async function fetchPizza() {
    const res = await fetch(BASE_URL + 'api/restaurants/2?populate=*');
    const data = await res.json();
    setPizzas(data.data);
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  if (pizzamanstads.length === 0) {
    return <p> loading </p>;
  }

  console.log(pizzamanstads);
  let { id, attributes } = pizzamanstads;

  console.log('pizza', attributes);
  return (
    <div className='card'>
      <h1>{attributes.name}</h1>
      <h2>Bestill på {attributes.phone}</h2>
      {attributes.menu_manstads.data.map((elm) => {
        return (
          <div key={elm.id} className='menuCard'>
            <div className='menuCardChild'>
              <h3>{elm.attributes.title}</h3>
              <p>{elm.attributes.price} nok</p>
            </div>
            <p>{elm.attributes.description}</p>
            <p>(Allergener: {elm.attributes.allergies})</p>
          </div>
        );
      })}
    </div>
  );
}
