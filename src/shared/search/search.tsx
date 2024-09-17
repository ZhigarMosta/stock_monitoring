import React from "react";
import icon from "./../../image/search.svg";
import style from "./search.module.scss";
import Image from "next/image";

interface SearchProps {
  func: any;
}

const Search: React.FC<SearchProps> = ({ func }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Image src={icon} alt="filter" />
        <input
          className={style.search}
          type="text"
          placeholder="Поиск"
          onChange={func}
        />
      </div>
    </div>
  );
};

export default Search;
