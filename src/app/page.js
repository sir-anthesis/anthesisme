import Image from "next/image";
import AnimeList from "@/app/components/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();

  return (
    <div>
      <h1>ini home</h1>
      <h3>Popular Anime</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {anime.data.map((data) => {
          return (
            <div>
              <div key={data.mal_id} className="shadow-xl">
                <AnimeList
                  title={data.title}
                  images={data.images.jpg.image_url}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
