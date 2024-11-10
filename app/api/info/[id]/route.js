import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";


export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newEmail: email, newPassword: password, newSalt: salt  } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, email, password, salt });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, context) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { params } = context;
  const { id } = await params;
  await connectMongoDB();
  const Details = await User.findOne({ _id: id });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ Details }, { status: 200 });
}