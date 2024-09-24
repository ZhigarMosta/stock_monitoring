"use client";
import React, { useState } from "react";
import ChoiceTicker from "../features/choiceTicker/choiceTicker";
import style from "./app.module.scss";
import Ema from "../widgets/rightChart/ema";
import Volumes from "../widgets/rightChart/volumes";
import News from "../widgets/rightChart/news";
import Cup from "../widgets/cup/cup";
import { useUnit } from "effector-react";
import { $nameTicker } from "../store/tickerStore";

function App() {
  const [shadow, setShadow] = useState(false);
  const tickerData: any = useUnit($nameTicker);

  const ChooseTickerIsPnen = () => {
    setShadow(!shadow);
    shadow
      ? document.body.classList.remove(style.body__scroll)
      : document.body.classList.add(style.body__scroll);
  };

  return (
    <div className={style.app}>
      <ChoiceTicker shadow={() => ChooseTickerIsPnen()} />
      <div className={shadow ? style.shadow_on : style.shadow_off}></div>
      <div className={style.content}>
        <div className={style.container__name_ticker__cup}>
          <h1 className={style.name_ticker}>
            {tickerData[0].name_ticker[0].name}
          </h1>
          <Cup />
        </div>
        <div className={style.container__news_volumes_ema}>
          <News />
          <Volumes />
          <Ema />
        </div>
      </div>
    </div>
  );
}

export default App;
