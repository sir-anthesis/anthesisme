const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const prevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center gap-6 font-bold py-8">
      {page > 1 && (
        <button onClick={prevPage} className="hover:text-orange-300">
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page < lastPage && (
        <button onClick={nextPage} className="hover:text-orange-300">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
