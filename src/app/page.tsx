import Header from '../components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl text-green-600 font-bold">DoDone</h1>
        <p className="text-lg text-gray-700 mt-4">
          Welcome to our website! Explore our categories and find what you need.
        </p>
      </section>
    </main>
  );
}
