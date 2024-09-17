import React, { useState } from "react";
import icon from "../../image/settings.svg";
import style from "./settings.module.scss";
import ModalSettings from "../modalSettings/modalSettings";
import Image from "next/image";

const Settings = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      {modalActive && <ModalSettings onClose={setModalActive} />}
      <button
        className={style.wrapper}
        onClick={() => setModalActive(!modalActive)}
      >
        <div className={style.container}>
          <Image src={icon} alt="settings" />
          <p className={style.text}>Настройки</p>
        </div>
      </button>
    </>
  );
};

export default Settings;
