const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const Item = require("./mongodb/ItemSchema");
const connectToDatabase = require("./mongodb/connect");
const { getRequestBody, sendResponse } = require("./helpers");

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  try {
    switch (true) {
      // Read all items
      case method === "GET" && url === "/api/items":
        const items = await Item.find();
        sendResponse(res, 200, items);
        break;

      // Create a new item
      case method === "POST" && url === "/api/items":
        const newItemData = await getRequestBody(req);
        const newItem = new Item(newItemData);
        await newItem.save();
        sendResponse(res, 201, newItem);
        break;

      // Update an item
      case method === "PUT" && url.startsWith("/api/items/"):
        const itemId = url.split("/")[3];
        const updatedItemData = await getRequestBody(req);
        await Item.findByIdAndUpdate(itemId, updatedItemData);
        sendResponse(res, 200, { message: "Item updated successfully." });
        break;

      // Delete an item
      case method === "DELETE" && url.startsWith("/api/items/"):
        const deleteItemId = url.split("/")[3];
        await Item.findByIdAndDelete(deleteItemId);
        sendResponse(res, 200, { message: "Item deleted successfully." });
        break;

      default:
        sendResponse(res, 404, { message: "Invalid route." });
        break;
    }
  } catch (error) {
    console.error("Error handling request:", error.message);
    sendResponse(res, 500, { message: "Internal server error." });
  }
});

const PORT = 3000;
server.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    server.close();
  }
});
