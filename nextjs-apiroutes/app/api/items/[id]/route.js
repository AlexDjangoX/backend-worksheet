import { NextResponse } from "next/server";

import Item from "@/mongodb/ItemSchema";
import connectToDatabase from "@/mongodb/connect";

export const PUT = async (request, { params }) => {
  try {
    connectToDatabase();

    const itemId = params.id;
    const updatedItemData = await request.json();
    await Item.findByIdAndUpdate(itemId, updatedItemData);
    return NextResponse.json({ message: "Item updated successfully." });
  } catch (error) {
    return NextResponse.json({ message: "Error updating item." });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    connectToDatabase();

    const itemId = params.id;
    await Item.findByIdAndDelete(itemId);
    return NextResponse.json({ message: "Item deleted successfully." });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting item." });
  }
};
