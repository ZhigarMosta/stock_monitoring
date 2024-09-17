import React, { useState } from "react";
import ChoosePerud from "../choosePerud/choosePerud";
import { useUnit } from "effector-react";
import { $instrument } from "../../store/choicePeriod";

const Instrument = () => {
  const [selectedValue, setSelectedValue] = useState("Инструменты");
  const handleChange = (event:any) => {
    setSelectedValue(event.target.value);
  };

  const instrumentData = useUnit($instrument);
  const arr = instrumentData[0].instrument;

  return (
    <ChoosePerud
      arr={arr}
      value={selectedValue}
      func={handleChange}
      name={"instrument"}
    />
  );
};

export default Instrument;
