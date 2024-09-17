import React, { useState, useEffect } from "react";
import style from "./modalSettings.module.scss";
import imgSettings from "./../../image/settings.svg";
import imgCross from "./../../image/cross.svg";
import { useUnit } from "effector-react";
import { $settings, settingsData } from "../../store/settingsStore";
import Image from "next/image";

interface MenuTextProps {
  onClose: (isOpen: boolean) => void;
}

interface Constant {
  id: number;
  text: string;
  new_value: number | string;
}

const ModalSettings: React.FC<MenuTextProps> = ({ onClose }) => {
  const settings = useUnit($settings);
  const [inputValues, setInputValues] = useState<Constant[]>([]); // Типизация состояния

  // Обновляем локальное состояние при изменении глобального состояния
  useEffect(() => {
    const initialValues: any = settings.flatMap((item: any) =>
      item.constants.map((constant: Constant) => ({ ...constant }))
    );
    setInputValues(initialValues);
  }, [settings]);

  const handleInputChange = (id: number, newValue: string) => {
    setInputValues((prevValues) =>
      prevValues.map((item) =>
        item.id === id ? { ...item, new_value: newValue } : item
      )
    );
  };

  const handleUpdate = () => {
    const updatedData: any = {
      constants: inputValues.map(({ id, new_value }) => ({
        id,
        new_value: Number(new_value), // Преобразуем значение в число
      })),
    };

    console.log(updatedData);

    // Вызов события для обновления данных
    settingsData(updatedData);

    onClose(false); // Закрыть модальное окно
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <button className={style.close} onClick={() => onClose(false)}>
            <Image className={style.cross} src={imgCross} alt="Close" />
          </button>
          <div className={style.name_container}>
            <Image
              className={style.img__settings}
              src={imgSettings}
              alt="Settings"
            />
            <p className={style.text__name}>Настройки</p>
          </div>
          <form className={style.setting__list}>
            {settings.map((item: any) => (
              <div key={item.id} className={style.wrapper_form__content}>
                {item.constants.map((constant: Constant) => (
                  <div
                    className={style.container__modal_text}
                    key={constant.id}
                  >
                    <div className={style.text__bock}>
                      <p className={style.text__input}>{constant.text}</p>
                    </div>
                    <div className={style.input__block}>
                      <input
                        type="text"
                        value={
                          inputValues.find((val) => val.id === constant.id)
                            ?.new_value || ""
                        }
                        className={style.input}
                        onChange={(e) =>
                          handleInputChange(constant.id, e.target.value)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </form>
          <div className={style.button__containe}>
            <button className={style.button} onClick={() => onClose(false)}>
              Отменить
            </button>
            <button className={style.button} onClick={handleUpdate}>
              Применить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSettings;
