"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };

  return (
    <div className="search-box">
      <input
        type="search"
        name=""
        id="search-input"
        placeholder="Search anime"
        ref={searchRef}
      />
      <button className="bx bx-search" onClick={handleSearch}></button>
    </div>
  );
};

export default InputSearch;
