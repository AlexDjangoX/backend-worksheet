import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default Item;
