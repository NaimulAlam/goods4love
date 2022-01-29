import { useEffect, useState } from 'react';

export default function UseAuth() {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    async function LoggedUser() {
      const url = 'https://goods4love.herokuapp.com/api/userInfo';
      const req = await fetch(url, {
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      });
      const data = await req.json();
      if (data.status === 'ok') {
        // console.log('auth data', data);
        setAuth(true);
      } else {
        setAuth(false);
      }
    }
    LoggedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return auth;
}
