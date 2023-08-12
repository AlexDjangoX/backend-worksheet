"use client";

import { useRouter } from "next/navigation";

import { deleteItem } from "@/database/actions";

function Delete({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteItem({ id });
    router.refresh();
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
