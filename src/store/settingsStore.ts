import { createStore, createEvent } from "effector";

// Событие для обновления настроек
export const settingsData = createEvent();

// Хранилище настроек
export const $settings = createStore([
  {
    constants: [
      {
        id: "1",
        text: "Тут будет длинное название константы прям реально длинное аж в 2 строки",
        new_value: 10,
      },
      {
        id: "2",
        text: "Тут будет длинное название константы прям реально длинное аж в 2 строки",
        new_value: 10,
      },
      {
        id: "3",
        text: "Тут будет длинное название константы прям реально длинное аж в 2 строки",
        new_value: 10,
      },
      {
        id: "4",
        text: "Тут будет длинное название константы прям реально длинное аж в 2 строки",
        new_value: 10,
      },
      {
        id: "5",
        text: "Тут будет длинное название константы прям реально длинное аж в 2 строки",
        new_value: 10,
      },
      {
        id: "6",
        text: "Тут будет длинное название константы прям реально длинное аж в 2 строки",
        new_value: 10,
      },
    ],
  },
]);

// Обработчик для обновления настроек
$settings.on(settingsData, (state, updatedData: any) => {
  return state.map((item: any) => {
    if (item.id === updatedData.id) {
      return {
        ...item,
        constants: item.constants.map((constant: any) => {
          const updatedConstant = updatedData.constants.find(
            (c: any) => c.id === constant.id
          );
          return updatedConstant
            ? { ...constant, new_value: updatedConstant.new_value }
            : constant;
        }),
      };
    }
    return item;
  });
});
