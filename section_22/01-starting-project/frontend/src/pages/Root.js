import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { getTokenDuration } from '../util/auth';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit()

  useEffect(() => {
    if (!token) {
      return
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' })
      return
    }

    const tokenDuration = getTokenDuration()
    console.log(tokenDuration)

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, tokenDuration)
  }, [token])

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
