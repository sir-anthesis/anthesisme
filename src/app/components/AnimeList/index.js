import Image from "next/image";

const AnimeList = ({ title, images }) => {
  return (
    <div className="justify-center items-center flex-col p-5">
      <Image src={images} width={300} height={300} alt="..." />
      <h3 className="font-bold text-xl p-4 text-center">{title}</h3>
    </div>
  );
};

export default AnimeList;
