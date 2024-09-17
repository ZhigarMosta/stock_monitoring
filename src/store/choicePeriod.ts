import { createStore, createEvent } from "effector";

export const instrumentData = createEvent();

export const $instrument = createStore([
  {
    instrument: [
			{
				id: 1,
				name: "Название1",
			},
			{
				id: 2,
				name: "Название2",
			},
			{
				id: 3,
				name: "Название3",
			},
    ],
  },
]).on(instrumentData, (_, newData) => newData);

export const periodLvlData = createEvent();

export const $periodLvl = createStore([
  {
    period: [
      {
        id: 1,
        name: "День",
      },
      {
        id: 2,
        name: "Неделя",
      },
      {
        id: 3,
        name: "Месяц",
      },
    ],
  },
]).on(periodLvlData, (_, newData) => newData);

export const periodNewsData = createEvent();

export const $periodNews = createStore([
  {
    period: [
      {
        id: 1,
        name: "День",
      },
      {
        id: 2,
        name: "Неделя",
      },
      {
        id: 3,
        name: "Месяц",
      },
    ],
  },
]).on(periodNewsData, (_, newData) => newData);

export const periodValumesData = createEvent();

export const $periodValumes = createStore([
  {
    period: [
      {
        id: 1,
        name: "День",
      },
      {
        id: 2,
        name: "Неделя",
      },
      {
        id: 3,
        name: "Месяц",
      },
    ],
  },
]).on(periodValumesData, (_, newData) => newData);

export const periodEmaData = createEvent();

export const $periodEma = createStore([
  {
    period: [
      {
        id: 1,
        name: "День",
      },
      {
        id: 2,
        name: "Неделя",
      },
      {
        id: 3,
        name: "Месяц",
      },
    ],
  },
]).on(periodEmaData, (_, newData) => newData);
