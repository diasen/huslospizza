import Image from 'next/image';

function AboutContent() {
  return (
    <div>
      <h1 className='aboutHeading'>Vår historie</h1>
      <div className='aboutTextContainer'>
        <p className='aboutText'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className='aboutText'>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>

      <div className='aboutImageContainer'>
        <div className='aboutImage'>
          <Image
            src='/images/pizzaoven.jpg'
            alt='Logo'
            width={200}
            height={130}
            layout='responsive'
          ></Image>
        </div>
        <div className='aboutImage'>
          <Image
            src='/images/aboutpizza.jpg'
            alt='Logo'
            width={200}
            height={130}
            layout='responsive'
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
