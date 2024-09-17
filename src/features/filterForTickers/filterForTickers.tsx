import React, { useState, useEffect } from "react";
import style from "./filterForTickers.module.scss";
import Settings from "../../shared/settings/settings";
import Instrument from "../../shared/instrument/instrument";
import Search from "../../shared/search/search";

interface FilterForTickersProps {
  func: any;
}

const FilterForTickers: React.FC<FilterForTickersProps> = ({ func }) => {
  return (
    <div className={style.container}>
      <Settings />
      <Instrument />
      <Search func={func} />
    </div>
  );
};

export default FilterForTickers;
