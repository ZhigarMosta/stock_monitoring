import React, { useState } from "react";
import style from "./byeSellChart.module.scss";
import SellChart from "../../shared/chart/sellChart";
import BuyChart from "../../shared/chart/byeChart";
import InputDate from "@/shared/inputDate/inputDate";

const ByeSellChart = () => {
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
      <InputDate />
    </div>
  );
};

export default ByeSellChart;
