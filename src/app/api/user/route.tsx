import { User } from "@/components/usersList/UsersList";
import { NextResponse } from "next/server";

const users = [{ name: "Tetra", id: 123 }];

export async function GET() {
  const userList: User[] = users;
  return NextResponse.json(userList);
}

export async function POST() {
  users.push({ name: "Tetra", id: 123 });
}

export async function DELETE() {}
