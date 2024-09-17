import { createStore, createEvent } from "effector";

export const lvlData = createEvent();

export const $lvl = createStore([
  {
    lvl: [
      {
        id: 1,
        buy_sell: "Покупка",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 2,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 3,
        buy_sell: "Покупка",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 4,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 5,
        buy_sell: "Покупка",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 6,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 7,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 8,
        buy_sell: "Покупка",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 9,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 10,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 11,
        buy_sell: "Покупка",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 12,
        buy_sell: "Продажа",
        value: "150 х 2105,5₽",
        percent: "100%",
      },
      {
        id: 13,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 14,
        buy_sell: "Покупка",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 15,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "9%",
      },
			{
        id: 16,
        buy_sell: "Покупка",
        value: "150 х 2145,5₽",
        percent: "90%",
      },
      {
        id: 17,
        buy_sell: "Продажа",
        value: "150 х 2145,5₽",
        percent: "9%",
      },
    ],
  },
]).on(lvlData, (_, newData) => newData);

export const priseTicketData = createEvent();

export const $priseTicket = createStore([
  {
    priseTicket: [{ prise: 2145.9 }],
  },
]).on(priseTicketData, (_, newData) => newData);

export const buyTicketData = createEvent();

export const $buyTicket = createStore([
  {
    buyList: [
      { count_buy: 150, prise: 2145.5 },
      { count_buy: 150, prise: 2245.5 },
      { count_buy: 150, prise: 2345.5 },
      { count_buy: 150, prise: 2445.5 },
      { count_buy: 150, prise: 2545.5 },
      { count_buy: 150, prise: 2645.5 },
      { count_buy: 150, prise: 2745.5 },
      { count_buy: 150, prise: 2845.5 },
      { count_buy: 150, prise: 2945.5 },
      { count_buy: 150, prise: 2115.5 },
      { count_buy: 150, prise: 2125.5 },
      { count_buy: 150, prise: 2135.5 },
    ],
  },
]).on(buyTicketData, (_, newData) => newData);

export const sellTicketData = createEvent();

export const $sellTicket = createStore([
  {
    sellList: [
      { count_sell: 150, prise: 2141.5 },
      { count_sell: 150, prise: 2142.5 },
      { count_sell: 150, prise: 2143.5 },
      { count_sell: 150, prise: 2144.5 },
      { count_sell: 150, prise: 2145.5 },
      { count_sell: 150, prise: 2146.5 },
      { count_sell: 150, prise: 2147.5 },
      { count_sell: 150, prise: 2148.5 },
      { count_sell: 150, prise: 2149.5 },
      { count_sell: 150, prise: 1145.5 },
      { count_sell: 150, prise: 3145.5 },
      { count_sell: 150, prise: 4145.5 },
    ],
  },
]).on(sellTicketData, (_, newData) => newData);
