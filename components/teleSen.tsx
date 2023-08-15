import React from "react";
import axios from "axios";
import type { Jamaah } from "@prisma/client";
import Image from "next/image";

const TelegramMessage = ({
  props,
  idteleuser,
}: {
  props: Jamaah[];
  idteleuser: string | null;
}) => {
  const sendMessage = async () => {
    let sentence = `Warning ${props.length} jamaah diluar area yang ditentukan \n`;
    props.map(
      (prop) =>
        (sentence += `${prop.id}. ${prop.name} (${prop.age}), ${prop.province}, ${prop.group} \n`)
    );

    const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELE_BOT_ID}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: idteleuser,
        text: sentence,
      });
      console.log("tele berhasil");
    } catch (error) {
      console.log("tele gagal");
    }
  };

  return (
    <button
      className="z-10 border-none absolute top-44 right-6"
      onClick={sendMessage}
    >
      <Image src="/notif.png" alt="compass" height={20} width={20} />
    </button>
  );
};

export default TelegramMessage;
