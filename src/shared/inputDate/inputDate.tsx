import React, { useState } from "react";
import style from "./inputDate.module.scss";
import DatePicker from "react-datepicker";
const InputDate = () => {
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
  const [startDate, setStartDate] = useState<any>(null);
  return (
    <div className={style.container__input}>
      <div className={style.input__date_wrapper}>
        <p className={style.input__text}>От</p>
        <input
          className={style.input__date}
          type="date"
          name="ofDateFrom"
          value={ofDateFrom}
          onChange={handleOfDateFromChange}
          placeholder="дд.мм.гггг"
        />
      </div>
      <div className={style.input__date_wrapper}>
        <p className={style.input__text}>До</p>
        {/* <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd.MM.yyyy"
          placeholderText="дд.мм.гггг"
          className={style.input__date}
          calendarClassName={style.custom__calendar} // Кастомизация календаря
        /> */}
        <input
          className={style.input__date}
          type="date"
          name="ofDateFrom"
          value={ToDateFrom}
          onChange={handleToDateFromChange}
          placeholder="дд.мм.гггг"
        />
      </div>
    </div>
  );
};

export default InputDate;
