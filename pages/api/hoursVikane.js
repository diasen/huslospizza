import { useState, useEffect } from 'react';

export default function Hours() {
  const [hoursmanstads, setHours] = useState([]);

  async function fetchHours() {
    const res = await fetch(
      'http://localhost:1337/api/restaurants/3?populate=*'
    );
    const data = await res.json();
    setHours(data.data);
  }

  useEffect(() => {
    fetchHours();
  }, []);

  if (hoursmanstads.length === 0) {
    return <p> loading </p>;
  }

  console.log(hoursmanstads);
  let { id, attributes } = hoursmanstads;

  console.log('hours', attributes);
  return (
    <div className='hoursCard'>
      {attributes.hours_vikanes.data.map((elm) => {
        return (
          <div key={elm.id} className='menuCard'>
            <div className='hoursCardChild'>
              <h6>{elm.attributes.hours}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}
