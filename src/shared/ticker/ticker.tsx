import React from "react";
import style from "./ticker.module.scss";

interface MenuTextProps {
  id: string | number;
  name: string;
  warnings: number;
  fun: any;
  checked: any;
}

const Ticker: React.FC<MenuTextProps> = ({
  id,
  name,
  warnings,
  fun,
  checked,
}) => {
  return (
    <div>
      <input
        id={"ticket__id" + id}
        name="ticket"
        type="radio"
        value={name}
        className={style.input}
        onChange={fun}
        checked={checked}
      />
      <div className={style.container}>
        <label className={style.content} htmlFor={"ticket__id" + id}>
          <p className={style.text}>{name}</p>
          <div className={style.wrapper__warnings}>
            {Array.from({ length: warnings }).map((_, index) => (
              <svg
                key={index}
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
								className={style.width__warnings}
              >
                <circle
                  cx="5"
                  cy="5"
                  r="4.5"
                  fill="#1B1D28"
                  stroke="#ABAFC4"
                  className={style.warnings__active}
                />
              </svg>
            ))}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Ticker;
