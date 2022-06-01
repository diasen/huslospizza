import { useState, useEffect } from 'react';
import { BASE_URL } from '../../config/config';

export default function Menu() {
  const [pizzasarpsborgs, setPizzas] = useState([]);

  async function fetchPizza() {
    const res = await fetch(BASE_URL + 'api/restaurants/1?populate=*');
    const data = await res.json();
    setPizzas(data.data);
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  if (pizzasarpsborgs.length === 0) {
    return <p> loading </p>;
  }

  console.log(pizzasarpsborgs);
  let { id, attributes } = pizzasarpsborgs;

  console.log('pizza', attributes);
  return (
    <div className='card'>
      <h1>{attributes.name}</h1>
      <h2>Bestill på {attributes.phone}</h2>
      {attributes.menu_sarpsborgs.data.map((elm) => {
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
