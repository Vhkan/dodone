import Header from "../components/Header";
import CategoriesList from "@/components/Categories";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <CategoriesList />
      </section>
    </main>
  );
}
