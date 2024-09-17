import { createEffect } from "effector";
import { apiInstance } from "../server";

// Эффект для выполнения запроса на обновление настроек
export const updateSettingsEffect = createEffect(async (settings) => {
  const response = await apiInstance.patch("/api/settings", {
    body: JSON.stringify(settings), //в документации посмотреть// разрешил все корсы
  });
  console.log(settings);
  if (!response.data) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
});
