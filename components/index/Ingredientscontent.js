import Link from 'next/link';

function Ingredientscontent() {
  return (
    <div>
      <h2 className='ingredientsHeading'>Nyt av ferske norske ingredienser</h2>
      <div className='ingredientBtnContainer'>
        <Link href='/locations'>
          <a className='ingredientBtn'>Se våre menyer</a>
        </Link>
      </div>
    </div>
  );
}

export default Ingredientscontent;
