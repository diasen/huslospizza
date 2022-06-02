import { useSession, signIn, signOut } from 'next-auth/react';
import { BiLogIn } from 'react-icons/Bi';
import { IconContext } from 'react-icons';

export default function Authentication() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className='loginContainer'>
        Signed in as {session.user.email} <br />
        <button className='loginBtn' onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className='loginContainer'>
      <br />
      <button className='loginBtn' onClick={() => signIn()}>
        Sign in
      </button>
      <IconContext.Provider value={{ color: 'white', className: 'loginIcon' }}>
        <div className='iconContainer'>
          <BiLogIn />
        </div>
      </IconContext.Provider>
    </div>
  );
}
