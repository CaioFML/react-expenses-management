import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit()

  useEffect(() => {
    if (!token) {
      return
    }

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, 1 * 60 * 60 * 1000)
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
