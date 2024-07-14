import Image from "next/image";
import AnimeList from "@/components/AnimeList/";
import Header from "@/components/AnimeList/Header";
import TopAnime from "@/components/AnimeList/TopAnime";
import {
  getAnimeResponse,
  getNestedResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const onAnime = await getAnimeResponse("seasons/now", "limit=20");
  let recAnime = await getNestedResponse("recommendations/anime", "entry");
  recAnime = reproduce(recAnime, 12);

  return (
    <div>
      <section className="popular container">
        <Header title={"Top Animes"} />
        <TopAnime api={topAnime} />
      </section>

      <section className="popular container">
        <Header title={"On Going Animes"} />
        <AnimeList api={onAnime} />
      </section>

      <section className="popular container">
        <Header title={"Recommendations Animes"} />
        <AnimeList api={recAnime} />
      </section>
    </div>
  );
};

export default Page;
