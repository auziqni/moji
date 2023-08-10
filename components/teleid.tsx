import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PutTeleId = async (idtele: string) => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const data = await prisma.userCommunication.findUnique({
    where: { UserId: userId },
  });

  if (data) {
    await prisma.userCommunication.update({
      where: { UserId: userId },
      data: { Teleid: idtele },
    });
  } else {
    await prisma.userCommunication.create({
      data: { UserId: userId, Teleid: idtele },
    });
  }
};

export const GetTeleId = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const data = await prisma.userCommunication.findUnique({
    where: { UserId: userId },
  });

  if (data) {
    return data.Teleid;
  } else {
    return "";
  }
};
