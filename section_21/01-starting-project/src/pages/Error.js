import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>404 Page Not Found</h1>
        <p>Coul not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;