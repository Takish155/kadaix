import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import bcrypt from "bcrypt";

import { registrationSchema } from "./registrationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = registrationSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: { username: body.username },
  });

  const existingEmail = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "ユーザIDがもうはすでに存在します" },
      { status: 400 }
    );
  }

  if (existingEmail) {
    return NextResponse.json({
      error: "メールアドレスがもうはすでに存在します",
    });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  await prisma.user.create({
    data: {
      username: body.username,
      email: body.email,
      hashedPassword: hashedPassword,
      birthday: body.birthDay,
      gender: body.gender,
    },
  });

  return NextResponse.json({ message: "アカウントが成功製作されました" });
}
