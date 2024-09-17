import React, { useState } from "react";
import style from "./byeSellChart.module.scss";
import SellChart from "../../shared/chart/sellChart";
import BuyChart from "../../shared/chart/byeChart";

const ByeSellChart = () => {
  const [ofDateFrom, setOfDateFrom] = useState("");

  const handleOfDateFromChange = (e: any) => {
    console.log(e.target.value);
    setOfDateFrom(e.target.value);
  };

  const [ToDateFrom, setToDateFrom] = useState("");

  const handleToDateFromChange = (e: any) => {
    console.log(e.target.value);
    setToDateFrom(e.target.value);
  };
  return (
    <div className={style.container}>
      <div className={style.cntainer__legend}>
        <p className={style.text__sum}>Суммы</p>
        <div className={style.name_legend}>
          <p className={style.text__buy}>Покупка</p>
          <p className={style.text__sell}>Продажа</p>
        </div>
      </div>
      <div className={style.container__chart}>
        <BuyChart />
        <SellChart />
      </div>
      <div className={style.container__input}>
        <div className={style.wrapper__input}>
          <p className={style.input__text}>От</p>
          <input
            className={style.input__date}
            name="ofDateFrom"
            value={ofDateFrom}
            onChange={handleOfDateFromChange}
            required
            type="date"
          />
        </div>
        <div className={style.wrapper__input}>
          <p className={style.input__text}>До</p>
          <input
            className={style.input__date}
            name="ToDateFrom"
            value={ToDateFrom}
            onChange={handleToDateFromChange}
            required
            type="date"
          />
        </div>
      </div>
    </div>
  );
};

export default ByeSellChart;
