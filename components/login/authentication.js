import { useSession, signIn, signOut } from 'next-auth/react';

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
    </div>
  );
}
