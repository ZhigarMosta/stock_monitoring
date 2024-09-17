import React, { useState } from "react";
import style from "./lvl.module.scss";
import ChoosePerud from "../../shared/choosePerud/choosePerud";
import { useUnit } from "effector-react";
import { $periodLvl } from "../../store/choicePeriod";
import { $lvl } from "../../store/cupStore";
const Lvl = () => {
  const [selectedValue, setSelectedValue] = useState("День");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const periodData = useUnit($periodLvl);
  const perud = periodData[0].period;

  const lvlData = useUnit($lvl);
  const arr = lvlData[0].lvl;
  return (
    <div className={style.container}>
      <div className={style.name__block}>
        <p className={style.name}>Уровни</p>
        <ChoosePerud
          value={selectedValue}
          func={handleChange}
          arr={perud}
          name={"lvl"}
        />
      </div>
      <div className={style.list__block}>
        <div className={style.list_lvl}>
          {arr
            ? arr.map((item) => {
                return (
                  <div className={style.wrapper__item} key={item.id}>
                    <p
                      className={
                        item.buy_sell === "Продажа"
                          ? style.item__text__buy_sell_purp
                          : style.item__text__buy_sell_blue
                      }
                    >
                      {item.buy_sell}
                    </p>
                    <p
                      className={
                        item.buy_sell === "Продажа"
                          ? style.item__text__value_purp
                          : style.item__text__value_blue
                      }
                    >
                      {item.value}
                    </p>
                    <p
                      className={
                        item.buy_sell === "Продажа"
                          ? style.item__text__percent_purp
                          : style.item__text__percent_blue
                      }
                    >
                      {item.percent}
                    </p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Lvl;
