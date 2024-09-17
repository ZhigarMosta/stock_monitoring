import React from "react";
import style from "./cup.module.scss";
import CupPrise from "../../features/cupPrise/cupPrise";
import ByeSellChart from "../byeSellChart/byeSellChart";
import considerations from "./../../image/considerations.svg";
import Lvl from "../../features/lvl/lvl";
import Image from "next/image";
const Cup = () => {
  let visibleConsiderations = true;
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
        <div className={style.left_block}>
          <CupPrise />
          <div className={style.line_container}>
            <div className={style.arrow__top}></div>
          </div>
          <Lvl />
        </div>
        <div className={style.arrow}></div>
        <div className={style.right_block}>
          <ByeSellChart />
        </div>
      </div>
    </div>
  );
};

export default Cup;
