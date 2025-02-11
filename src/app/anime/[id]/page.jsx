import {
  getAnimeResponse,
  getNestedResponse,
  reproduce,
} from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import VideoPlayer from "@/utilities/VideoPlayer";

const Page = async ({ params: { id } }) => {
  const animeDetail = await getAnimeResponse(`anime/${id}`);
  let recAnime = await getNestedResponse("recommendations/anime", "entry");
  recAnime = reproduce(recAnime, 12);
  return (
    <>
      <div className="play-container container">
        <img
          src={
            animeDetail.data.trailer.images.maximum_image_url
              ? animeDetail.data.trailer.images.maximum_image_url
              : animeDetail.data.images.webp.large_image_url
          }
          alt=""
          className="play-img rounded"
        />

        <div className="play-text">
          <h2>{animeDetail.data.title}</h2>
          <div className="rating">
            {animeDetail.data.score}
            <i className="bx bxs-star"></i>
          </div>
          <div className="tags">
            {animeDetail.data.themes.map((theme, index) => (
              <span key={index}>{theme.name}</span>
            ))}
          </div>
          <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id} />
        </div>
      </div>

      <div className="about-movie container">
        <h2>{animeDetail.data.title_english}</h2>
        <p>{animeDetail.data.synopsis}</p>

        <h2 className="pt-5">Background</h2>
        <p>{animeDetail.data.background}</p>

        <h2 className="pt-5">Details</h2>
        <p>
          <span className="font-bold">Status : </span>
          {animeDetail.data.status}
        </p>
        <p>
          <span className="font-bold">Rating : </span>
          {animeDetail.data.rating}
        </p>
        <p>
          <span className="font-bold">Type : </span>
          {animeDetail.data.type}
        </p>
        <p>
          <span className="font-bold">Year : </span>
          {animeDetail.data.year}
        </p>
        <p>
          <span className="font-bold">Studio : </span>
          {animeDetail.data.studios[0].name}
        </p>
      </div>

      <section>
        <div className="container">
          <Header title={"Others Animes"} />
          <AnimeList api={recAnime} />
        </div>
      </section>
    </>
  );
};

export default Page;
