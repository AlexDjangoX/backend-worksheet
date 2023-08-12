"use server";

import { revalidatePath } from "next/cache";

import Item from "@/mongodb/ItemSchema";
import connectToDatabase from "@/mongodb/connect";

export const getItems = async () => {
  try {
    connectToDatabase();

    const items = await Item.find();
    return items;
  } catch (error) {
    throw new Error("Error retrieving items.");
  }
};

export const getItemById = async ({ id }) => {
  try {
    connectToDatabase();

    const item = await Item.findById(id);
    return item;
  } catch (error) {
    throw new Error("Error retrieving item.");
  }
};

export const createItem = async ({ name, description, path }) => {
  try {
    connectToDatabase();

    const newItem = new Item({ name, description });
    await newItem.save();

    revalidatePath(path);
    return newItem;
  } catch (error) {
    throw new Error("Error creating item.");
  }
};

export const updateItem = async ({ _id, name, description, path }) => {
  try {
    connectToDatabase();

    await Item.findByIdAndUpdate(_id, { name, description });

    revalidatePath(path);
    return { message: "Item updated successfully." };
  } catch (error) {
    throw new Error("Error updating item.");
  }
};

export const deleteItem = async ({ _id, path }) => {
  try {
    connectToDatabase();

    await Item.findByIdAndDelete(_id);

    revalidatePath(path);
    return { message: "Item deleted successfully." };
  } catch (error) {
    throw new Error("Error deleting item.");
  }
};
