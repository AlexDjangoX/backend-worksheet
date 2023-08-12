"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { createItem, updateItem } from "@/lib/items.action";

const Form = ({ mode, item }) => {
  const router = useRouter();
  const pathname = usePathname();

  const parsedItem = item ? JSON.parse(item) : null;

  const [itemName, setItemName] = useState(parsedItem?.name || "");
  const [itemDescription, setItemDescription] = useState(
    parsedItem?.description || ""
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newItemData = { name: itemName, description: itemDescription };

    if (mode === "create") {
      await createItem({ ...newItemData, path: pathname });
    } else if (mode === "update") {
      await updateItem({ _id: parsedItem._id, ...newItemData, path: pathname });
    }

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className='mb-4'>
      <input
        type='text'
        name='name'
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder='Item Name'
        className='w-full border rounded p-2 mb-2'
      />
      <input
        type='text'
        name='description'
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        placeholder='Item Description'
        className='w-full border rounded p-2 mb-2'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Save
      </button>
    </form>
  );
};

export default Form;
