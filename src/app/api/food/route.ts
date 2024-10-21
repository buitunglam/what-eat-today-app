import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    console.log("name --", name);
    return NextResponse.json({ data: "ok" }, { status: 200 });
  } catch (error) {
    return new NextResponse("something went wrong", { status: 500 });
  }
}
