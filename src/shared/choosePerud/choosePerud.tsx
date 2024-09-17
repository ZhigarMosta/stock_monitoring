import React, { useState } from "react";
import style from "./choosePerud.module.scss";
import icon from "./../../image/filter.svg";
import arrow from "./../../image/arrow.svg";
import Image from "next/image";

interface MenuTextProps {
  value: string;
  func: any;
  arr: any;
  name: string;
}

const ChoosePerud: React.FC<MenuTextProps> = ({ value, func, arr, name }) => {
  return (
    <div className={style.box}>
      <div className={style.wrapper}>
        <div className={style.container}>
          <Image src={icon} alt="filter" />
          <p className={style.text}>{value}</p>
          <Image src={arrow} alt="arrow" className={style.arrow} />
        </div>
      </div>
      <div className={style.modal}>
        {arr
          ? arr.map((item:any) => {
              return (
                <div className={style.container__modal_text} key={item.id}>
                  <input
                    id={name + item.name}
                    name={name}
                    type="radio"
                    value={item.name}
                    checked={value === item.name}
                    onChange={func}
                    className={style.input}
                  />
                  <label
                    className={style.wrapper__instrument}
                    htmlFor={name + item.name}
                  >
                    <div className={style.text}>{item.name}</div>
                  </label>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ChoosePerud;
