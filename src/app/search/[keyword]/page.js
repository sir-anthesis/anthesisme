import AnimeList from "@/components/AnimeList/";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await searchResponse.json();

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
