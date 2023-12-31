import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;
    if (!userId) {
      return new NextResponse("Unathorized", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    const newUser = {
      name,
      userId,
    };
    const store = await prismadb.store.create({
      data: newUser,
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log(`[STORES_POST]`, error);
    return new NextResponse("Intrnal error", { status: 500 });
  }
}
