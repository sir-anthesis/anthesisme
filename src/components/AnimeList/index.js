import Image from "next/image";
import Link from "next/link";

const NewAnime = ({ api }) => {
  return (
    <>
      <div className="popular-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {api.data.map((data) => {
          return (
            <Link
              key={data.mal_id}
              className="movie-box cursor-pointer"
              href={`/${data.mal_id}`}
            >
              <img
                src={data.images.jpg.image_url}
                width={100}
                height={100}
                alt="..."
                className="movie-box-img"
              />
              <div className="box-text">
                <h2 className="movie-title font-bold">{data.title}</h2>
                <span className="movie-type">{data.genres[0].name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NewAnime;
