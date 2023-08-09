import React from "react";
import axios from "axios";
import type { AllJamaah } from "@prisma/client";
import Image from "next/image";

const TelegramMessage = ({ props }: { props: AllJamaah[] }) => {
  //   const datas = props.data;
  const sendMessage = async () => {
    // const chatId1 = "1099351795"; // Ganti dengan ID chat Anda
    // const botToken = "6697266029:AAGNL-JNvJKGWFNLrk3VEVJRUOL5uDfSrHU"; // Ganti dengan token bot Anda
    // let BanyakOrang = props.length();
    let sentence = `Warning ${props.length} jamaah diluar area yang ditentukan \n`;
    props.map(
      (prop) =>
        (sentence += `${prop.Id}. ${prop.Nama} (${prop.Age}), ${prop.Province}, ${prop.Group} \n`)
    );
    // sentence += `23. andi sukra (54), Lampung, Alhidayah \n`;

    const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELE_BOT_ID}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: process.env.NEXT_PUBLIC_TELE_ADMIN,
        text: sentence,
      });
      console.log("Pesan berhasil dikirim ke Telegram");
    } catch (error) {
      console.error("Gagal mengirim pesan ke Telegram:", error);
    }
  };

  return (
    <button
      className="z-10 border-none absolute top-44 right-6"
      onClick={sendMessage}
    >
      <Image src="/notif.png" alt="compass" className="h-5 w-5" />
    </button>
  );
};

export default TelegramMessage;
