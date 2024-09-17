import { createStore, createEvent } from "effector";

// Событие для обновления данных
export const nameTickerData = createEvent();

// Хранилище для данных
export const $nameTicker: any = createStore([
  {
    name_ticker: [{ name: "Ticker" }],
  },
]).on(nameTickerData, (_, newData) => newData);

export const tickersData = createEvent();

export const $tickers = createStore([
  {
    tickers: [
      { id: 1, name: "Название1", warnings: 4 },
      { id: 2, name: "Название2", warnings: 3 },
      { id: 3, name: "Название3", warnings: 4 },
      { id: 4, name: "Название4", warnings: 3 },
      { id: 5, name: "Название5", warnings: 4 },
      { id: 6, name: "Название6", warnings: 3 },
      { id: 7, name: "Название7", warnings: 4 },
      { id: 8, name: "Название8", warnings: 3 },
      { id: 9, name: "Название9", warnings: 4 },
      { id: 10, name: "Название10", warnings: 3 },
      { id: 11, name: "Название11", warnings: 4 },
      { id: 12, name: "Название12", warnings: 3 },
      { id: 13, name: "Название13", warnings: 4 },
      { id: 14, name: "Название14", warnings: 3 },
      { id: 15, name: "Название15", warnings: 4 },
      { id: 16, name: "Название16", warnings: 3 },
      { id: 17, name: "Название17", warnings: 4 },
      { id: 18, name: "Название18", warnings: 3 },
      { id: 19, name: "Название19", warnings: 4 },
      { id: 20, name: "Название20", warnings: 3 },
      { id: 21, name: "Название21", warnings: 4 },
      { id: 22, name: "Название22", warnings: 3 },
      { id: 23, name: "Название23", warnings: 4 },
      { id: 24, name: "Название24", warnings: 3 },
      { id: 25, name: "Название25", warnings: 4 },
      { id: 26, name: "Название26", warnings: 4 },
      // { id: 27, name: "Название8", warnings: 3 },
      // { id: 28, name: "Название9", warnings: 4 },
      // { id: 29, name: "Название10", warnings: 3 },
      // { id: 30, name: "Название11", warnings: 4 },
      // { id: 31, name: "Название12", warnings: 3 },
      // { id: 32, name: "Название13", warnings: 4 },
      // { id: 33, name: "Название14", warnings: 3 },
      // { id: 34, name: "Название15", warnings: 4 },
      // { id: 35, name: "Название16", warnings: 3 },
      // { id: 36, name: "Название17", warnings: 4 },
      // { id: 37, name: "Название18", warnings: 3 },
      // { id: 38, name: "Название19", warnings: 4 },
      // { id: 39, name: "Название20", warnings: 3 },
      // { id: 40, name: "Название21", warnings: 4 },
      // { id: 41, name: "Название22", warnings: 3 },
      // { id: 42, name: "Название23", warnings: 4 },
      // { id: 43, name: "Название24", warnings: 3 },
      // { id: 44, name: "Название25", warnings: 4 },
    ],
  },
]).on(tickersData, (_, newData) => newData);
