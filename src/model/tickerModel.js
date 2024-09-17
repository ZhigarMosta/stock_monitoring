javascript;
import { createEffect } from "effector";
import { apiInstance } from "../server";

// Эффект для выполнения запроса на получение данных
export const getTickerNameDataEffect = createEffect(async ({ ticker }) => {
  const response = await apiInstance.get(`/api/tickers/${ticker}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data; // Ожидаем, что данные будут в формате { name_ticker: [{ name: "Ticker" }] }
});

export const getTickersDataEffect = createEffect(async () => {
  const response = await apiInstance.get(`/api/tickers/all`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
});
