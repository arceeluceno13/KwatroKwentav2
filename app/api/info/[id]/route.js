import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newEmail: email, newPassword: password, newSalt: salt  } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, email, password, salt });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, context) {
  const { params } = context;
  const { id } = await params;
  await connectMongoDB();
  const Details = await User.findOne({ _id: id });
  return NextResponse.json({ Details }, { status: 200 });
}