import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal } from "antd";

import ButtonCustom from "../../../Components/Button/Button";
import Usd from "../../../Components/Box/Usd";
import ModalDone from "../../../Components/Modal/ModalDone";
import ModalJoin from "../../../Components/Modal/ModalJoin";

import { ReactComponent as Down } from "../../../Imgs/down.svg";
import { ReactComponent as Logo } from "../../../Imgs/BigLogo.svg";

import "./Main.scss";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [openSecond, setOpenSecond] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      setOpenSecond(true);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
    setOpenSecond(false);
  };

  const { t, i18n } = useTranslation();
  return (
    <div className="main">
      <div className="main_content">
        <div className="main_list">
          <div className="main_content__name">{t("main_trade")}</div>
          <div className="main_content__text">{t("main_text")}</div>

          <div className="main_content__join" onClick={showModal}>
            <ButtonCustom text={t("main_join")} />
          </div>

          <div className="main_box">
            <div>
              <Usd text="BTCUSD" />
            </div>
            <div className="main_box__content">
              <Usd text="TSLA" />
            </div>
            <div>
              <Usd text="AAPL" />
            </div>
          </div>
        </div>
        <div>
          <div className="main_img">
            <Logo />
          </div>
        </div>
      </div>
      <div className="main_down">
        <Down />
      </div>

      <Modal
        open={openSecond}
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <ModalDone />
      </Modal>

      <Modal
        open={open}
        title=""
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <ModalJoin />
        <Button
          loading={loading}
          type="primary"
          onClick={handleOk}
          key="submit"
          className="modal_button"
        >
          Записаться на курс
        </Button>
      </Modal>
    </div>
  );
};

export default Main;
