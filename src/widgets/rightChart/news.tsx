import React, { useState } from "react";
import style from "./chart.module.scss";
import ChoosePerud from "../../shared/choosePerud/choosePerud";
import considerations from "../../image/considerations.svg";
import NewsChart from "../../shared/chart/newsChart";
import { useUnit } from "effector-react";
import { $periodNews } from "../../store/choicePeriod";
import Image from "next/image";

const News = () => {
  const [selectedValue, setSelectedValue] = useState("День");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const periodData = useUnit($periodNews);
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
            <p className={style.name_block}>Новости</p>
            <div className={style.arrow}></div>
          </div>
          <div className={style.wrapper__ChoosePerud}>
            <ChoosePerud
              arr={arr}
              value={selectedValue}
              func={handleChange}
              name={"new"}
            />
          </div>
        </div>
        <NewsChart />
      </div>
    </div>
  );
};

export default News;
