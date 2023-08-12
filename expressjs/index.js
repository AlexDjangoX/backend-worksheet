const express = require("express");
const dotenv = require("dotenv");

const Item = require("./mongodb/ItemSchema");
const connectToDatabase = require("./mongodb/connect");

const app = express();
dotenv.config();

// Middleware
app.use(express.json());

// Read all items
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving items." });
  }
});

// Create a new item
app.post("/api/items", async (req, res) => {
  try {
    const newItemData = req.body;
    const newItem = new Item(newItemData);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: "Error creating item." });
  }
});

// Update an item
app.put("/api/items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItemData = req.body;
    await Item.findByIdAndUpdate(itemId, updatedItemData);
    res.status(200).json({ message: "Item updated successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error updating item." });
  }
});

// Delete an item
app.delete("/api/items/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    await Item.findByIdAndDelete(itemId);
    res.status(200).json({ message: "Item deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item." });
  }
});

const PORT = 3000;
app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    server.close();
  }
});
