import Image from "next/image";

const AnimeList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();

  return (
    <>
      <section className="popular container" id="popular">
        <div className="heading">
          <h2 className="heading-title">Top Animes</h2>
        </div>
        <div className="popular-content grid grid-cols-2 md:grid-cols-5 gap-4">
          {anime.data.map((data) => {
            return (
              <div key={data.mal_id} className="movie-box">
                <img
                  src={data.images.jpg.image_url}
                  width={100}
                  height={100}
                  alt="..."
                  className="movie-box-img"
                />
                <div className="box-text">
                  <h2 className="movie-title font-bold">{data.title}</h2>
                  <span className="movie-type">{data.score}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AnimeList;
