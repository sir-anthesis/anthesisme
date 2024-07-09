"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if (keyword.length > 0) {
      if (event.key === "Enter" || event.type === "click") {
        event.preventDefault();
        router.push(`/search/${keyword}`);
      }
    }
  };

  return (
    <div className="search-box">
      <input
        type="search"
        name=""
        id="search-input"
        placeholder="Search anime"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="bx bx-search" onClick={handleSearch}></button>
    </div>
  );
};

export default InputSearch;
