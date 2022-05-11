import { useState, useEffect } from 'react';

export default function Menu() {
  const [pizzasarpsborgs, setPizzas] = useState([]);

  async function fetchPizza() {
    const res = await fetch('http://localhost:1337/api/pizzasarpsborgs');
    const data = await res.json();
    setPizzas(data.data);
  }

  useEffect(() => {
    fetchPizza();
  }, []);
  console.log(pizzasarpsborgs);
  return (
    <div>
      {pizzasarpsborgs
        ? pizzasarpsborgs.map(
            ({ id, attributes: { title, price, allergies, description } }) => {
              console.log('pizzaID');
              return (
                <div key={id}>
                  <p>{title}</p>
                  <p>{price}</p>
                  <p>{allergies}</p>
                  <p>{description}</p>
                </div>
              );
            }
          )
        : 'Loading...'}
    </div>
  );
}
