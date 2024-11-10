
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function POST(request) {
  const { name, email, password, salt } = await request.json();
  await connectMongoDB();
  await User.create({ name, email, password, salt });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const Details = await User.find();
  return NextResponse.json({ Details }, { status: 200 });
}

export async function DELETE(request) {
    const id = new URL(request.url).searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
}
