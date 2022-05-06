import { useState, useEffect } from 'react';

export default function Menu() {
  const [pizzasarpsborgs, setPizzas] = useState(['']);

  async function fetchPizza() {
    const res = await fetch('http://localhost:1337/api/pizzasarpsborgs');
    const data = await res.json();
    setPizzas(data.data[1].attributes);

    const newpizzaArray = data.data[1].attributes;
    console.log(newpizzaArray);
    console.log(newpizzaArray.title);
    console.log(newpizzaArray.price);
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <div>
      {pizzasarpsborgs.map((pizza) => (
        <div key={pizza.id}>
          <h4>{pizza.title}</h4>
        </div>
      ))}
    </div>
  );
}
