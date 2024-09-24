import React from "react";
import style from "./cupPrise.module.scss";
import { useUnit } from "effector-react";
import { $buyTicket, $priseTicket, $sellTicket } from "../../store/cupStore";

const CupPrise = () => {
  const buyListData = useUnit($buyTicket);
  const buyList = buyListData[0].buyList;

  const sellListData = useUnit($sellTicket);
  const sellList = sellListData[0].sellList;

  const priseData = useUnit($priseTicket);
  const priseTicker = priseData[0].priseTicket[0].prise;

  return (
    <div className={style.containe}>
      <div className={style.wrapper__name_block}>
        <p className={style.name_block}>Стакан</p>
      </div>
      <div className={style.prise_ticker__block}>
        <p className={style.text}>Цена</p>
        <div className={style.ticker}>
          {priseTicker}
          <span className={style.currency}>₽</span>
        </div>
      </div>
      <div className={style.text_block}>
        <p className={style.text}>Крупные заявки за сегодня</p>
      </div>
      <div className={style.container__text_name__listlist}>
        <p className={style.text_name__buy_listlist}>Покупка</p>
        <p className={style.text_name__sell_listlist}>Продажа</p>
      </div>
      <div className={style.buy_sell__list}>
        <div className={style.container__buy__list}>
          <div className={style.buy__list}>
            {buyList.length > 0
              ? buyList.map((item) => (
                  <p className={style.text__list} key={item.prise}>
                    {item.count_buy} x {item.prise}
                  </p>
                ))
              : null}
          </div>
        </div>
        <div className={style.container__sell__list}>
          <div className={style.sell__list}>
            {sellList.length > 0
              ? sellList.map((item) => (
                  <p className={style.text__list} key={item.prise}>
                    {item.count_sell} x {item.prise}
                  </p>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CupPrise;
