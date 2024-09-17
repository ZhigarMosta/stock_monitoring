import React, { useState } from "react";
import style from "./volumes.module.scss";
import ChoosePerud from "../../shared/choosePerud/choosePerud";
import considerations from "../../image/considerations.svg";
import VolumesChart from "../../shared/chart/volumesChart";
import { useUnit } from "effector-react";
import { $periodValumes } from "../../store/choicePeriod";
import Image from "next/image";

const Volumes = () => {
  const [selectedValue, setSelectedValue] = useState("День");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const periodData = useUnit($periodValumes);
  const arr = periodData[0].period;

  const visibleConsiderations = false;
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
            <p className={style.name_block}>Объёмы</p>
            <div className={style.arrow}></div>
          </div>
          <div className={style.wrapper__ChoosePerud}>
            <ChoosePerud
              arr={arr}
              value={selectedValue}
              func={handleChange}
              name={"volumes"}
            />
          </div>
        </div>
        <VolumesChart />
      </div>
    </div>
  );
};

export default Volumes;
