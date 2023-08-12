"use client";

import { usePathname } from "next/navigation";

import { deleteItem } from "@/lib/items.action";

function Delete({ id }) {
  const pathname = usePathname();

  const handleDelete = async () => {
    await deleteItem({ _id: JSON.parse(id), path: pathname });
  };

  return (
    <button
      type='button'
      className='text-red-500 hover:underline'
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

export default Delete;
