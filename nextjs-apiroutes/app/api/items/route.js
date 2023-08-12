import { NextResponse } from "next/server";

import Item from "@/mongodb/ItemSchema";
import connectToDatabase from "@/mongodb/connect";

export const GET = async (request) => {
  try {
    connectToDatabase();

    const items = await Item.find();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ message: "Error retrieving items." });
  }
};

export const POST = async (request) => {
  try {
    connectToDatabase();

    const newItemData = await request.json();
    const newItem = new Item(newItemData);
    await newItem.save();
    return NextResponse.json(newItem);
  } catch (error) {
    return NextResponse.json({ message: "Error creating item." });
  }
};
