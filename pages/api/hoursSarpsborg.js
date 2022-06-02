import { useState, useEffect } from 'react';
import { BASE_URL } from '../../config/config';

export default function Hours() {
  const [hoursmanstads, setHours] = useState([]);

  async function fetchHours() {
    const res = await fetch(BASE_URL + 'api/restaurants/1?populate=*');
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
      {attributes.hours_sarpsborgs.data.map((elm) => {
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
