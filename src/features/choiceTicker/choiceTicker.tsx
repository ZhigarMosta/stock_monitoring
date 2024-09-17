import React, { useState, useEffect } from "react";
import style from "./choiceTicker.module.scss";
import TickerList from "../tickerList/tickerList";
import FilterForTickers from "../filterForTickers/filterForTickers";
import { $tickers } from "../../store/tickerStore";
import { useUnit } from "effector-react";

interface ChoiceTickerProps {
  shadow: any;
}

const ChoiceTicker: React.FC<ChoiceTickerProps> = ({ shadow }) => {
  const storeData = useUnit($tickers);
  const tickers = storeData[0]?.tickers;
  const [filteredTickers, setFilteredTickers] = useState(tickers);

  useEffect(() => {
    setFilteredTickers(tickers);
  }, []);

  const search = (query: string) => {
    if (!query) {
      return tickers;
    }
    return tickers.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleChange = (e: any) => {
    const newList = search(e.target.value);
    setFilteredTickers(newList);
  };

  return (
    <div className={style.wrapper}>
      <input
        id="menu_toggle"
        name="menu_toggle"
        className={style.menu_toggle}
        type="checkbox"
				onChange={shadow}
      />
      <div className={style.container}>
        <div className={style.arrow__container}>
          <label className={style.menu_button_container} htmlFor="menu_toggle">
            <div className={style.line__wrapper}>
              <div className={style.line_top}></div>
              <div className={style.line_top}></div>
              <div className={style.line_top}></div>
            </div>
            <div className={style.line__wrapper}>
              <div className={style.line_bottom}></div>
              <div className={style.line_bottom}></div>
              <div className={style.line_bottom}></div>
            </div>
          </label>
        </div>
        <FilterForTickers func={handleChange} />
        <svg
          className={style.line}
          width="265"
          viewBox="0 0 265 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.98462 4.00006L262.985 2.00006"
            stroke="#16171F"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div className={style.ticker_list__container}>
          <TickerList tickets={filteredTickers} />
        </div>
      </div>
    </div>
  );
};

export default ChoiceTicker;
