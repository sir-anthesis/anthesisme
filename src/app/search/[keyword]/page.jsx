import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList/";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`);

  return (
    <div>
      <section className="popular container" id="popular">
        <Header title={`Search for ${decodeKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </div>
  );
};

export default Page;
