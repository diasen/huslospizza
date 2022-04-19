import { useRouter } from 'next/router';
import { BsArrowReturnLeft } from 'react-icons/Bs';

export default function Return() {
  const router = useRouter();

  return (
    <div className='returnBtnContainer'>
      <button className='returnBtn' type='button' onClick={() => router.back()}>
        Tilbake <BsArrowReturnLeft />
      </button>
    </div>
  );
}
