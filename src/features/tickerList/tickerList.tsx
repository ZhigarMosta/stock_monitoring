import React, { useEffect, useState } from "react";
import Ticker from "../../shared/ticker/ticker";
import style from "./tickerList.module.scss";
import { nameTickerData, $nameTicker } from "../../store/tickerStore";
import { useUnit } from "effector-react";

interface TickerListProps {
  tickets: any;
}

const TickerList: React.FC<TickerListProps> = ({ tickets }) => {
  const tickerName: any = useUnit($nameTicker);

  useEffect(() => {
    const logData = () => {
      if (tickerName.length > 0) {
        console.log(tickerName[0].name_ticker[0].name);
      }
    };

    logData();
    const intervalId = setInterval(logData, 60000);

    return () => clearInterval(intervalId);
  }, [tickerName]);

  const [nameTickers, setNameTickers] = useState<string>();

  const handleChange = (tickets_name: string) => {
    setNameTickers(tickets_name);
    const newData: any = [
      {
        name_ticker: [{ name: tickets_name }],
      },
    ];
    nameTickerData(newData);
  };

  return (
    <div className={style.container__ticker_list}>
      {tickets.length > 0
        ? tickets.map((ticker: any) => (
            <Ticker
              key={ticker.id}
              id={ticker.name}
              name={ticker.name}
              warnings={ticker.warnings}
              fun={() => handleChange(ticker.name)}
              checked={nameTickers === ticker.name}
            />
          ))
        : null}
    </div>
  );
};

export default TickerList;
