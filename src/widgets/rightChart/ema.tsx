import React, { useState } from "react";
import style from "./chart.module.scss";
import ChoosePerud from "../../shared/choosePerud/choosePerud";
import EmaChart from "../../shared/chart/emaChart";
import considerations from "../../image/considerations.svg";
import { useUnit } from "effector-react";
import { $periodEma } from "../../store/choicePeriod";
import Image from "next/image";

const Ema = () => {
  const [selectedValue, setSelectedValue] = useState("День");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const periodData = useUnit($periodEma);
  const arr = periodData[0].period;

  const visibleConsiderations = true;
  return (
    <div className={style.element_for_img}>
      <div className={style.img__container}>
        {visibleConsiderations ? (
          <Image
            src={considerations}
            alt="considerations"
            className={style.considerations}
          />
        ) : null}
      </div>
      <div className={style.container}>
        <div className={style.wrapper__top_part}>
          <div className={style.wrapper__name_block}>
            <p className={style.name_block}>
              <samp className={style.ema50}>EMA50</samp> и{" "}
              <samp className={style.ema200}>EMA200</samp>
            </p>
            <div className={style.arrow}></div>
          </div>
          <div className={style.wrapper__ChoosePerud}>
            <ChoosePerud
              arr={arr}
              value={selectedValue}
              func={handleChange}
              name={"ema"}
            />
          </div>
        </div>
        <EmaChart />
      </div>
    </div>
  );
};

export default Ema;
