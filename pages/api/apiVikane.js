import { useState, useEffect } from 'react';

export default function Menu() {
  const [pizzavikanes, setPizzas] = useState([]);

  async function fetchPizza() {
    const res = await fetch(
      'http://localhost:1337/api/restaurants/3?populate=*'
    );
    const data = await res.json();
    setPizzas(data.data);
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  if (pizzavikanes.length === 0) {
    return <p> loading </p>;
  }

  console.log(pizzavikanes);
  let { id, attributes } = pizzavikanes;

  console.log('pizza', attributes);
  return (
    <div className='card'>
      <h1>{attributes.name}</h1>
      <h2>Bestill på {attributes.phone}</h2>
      {attributes.menu_vikanes.data.map((elm) => {
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
