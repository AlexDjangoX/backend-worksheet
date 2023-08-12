import supabase from "./client";

// Create a new item
async function createItem({ newItemData }) {
  const { data, error } = await supabase
    .from("items")
    .insert([newItemData])
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Read all items
async function getItems() {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    throw error;
  }

  return data;
}

// Get item details by ID
async function getItemById({ id }) {
  const { data, error } = await supabase
    .from("items")
    .select("")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

// Update an item
async function updateItem({ id, newItemData }) {
  const { data, error } = await supabase
    .from("items")
    .update(newItemData)
    .eq("id", id);

  if (error) {
    throw error;
  }

  return data;
}

// Delete an item
async function deleteItem({ id }) {
  const { data, error } = await supabase.from("items").delete().eq("id", id);

  if (error) {
    throw error;
  }

  return data;
}

export { createItem, getItems, getItemById, updateItem, deleteItem };
