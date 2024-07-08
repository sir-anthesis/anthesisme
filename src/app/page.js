import Image from "next/image";
import AnimeList from "@/components/AnimeList/";
import Header from "@/components/AnimeList/Header";
import TopAnime from "@/components/AnimeList/TopAnime";

const Home = async () => {
  const topResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await topResponse.json();

  const onResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=20`
  );
  const onAnime = await onResponse.json();

  return (
    <div>
      <section className="popular container" id="popular">
        <Header title={"Top Animes"} />
        <TopAnime api={topAnime} />
      </section>

      <section className="popular container" id="popular">
        <Header title={"On Going Animes"} />
        <AnimeList api={onAnime} />
      </section>
    </div>
  );
};

export default Home;
