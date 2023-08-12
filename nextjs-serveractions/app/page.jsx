import Link from "next/link";

import Delete from "@/components/Delete";
import { getItems } from "@/lib/items.action";

async function Home() {
  const items = await getItems();

  return (
    <main className='max-w-5xl mx-auto p-8'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-semibold'>Item List</h1>
        <Link
          href='/create'
          className='flex items-center text-green-500 hover:text-green-600'
        >
          Create
        </Link>
      </div>

      <ul className='grid grid-cols-1 gap-4'>
        {items.map((item) => (
          <li key={item._id}>
            <div className='bg-white p-4 shadow-md rounded-md'>
              <h2 className='text-lg font-semibold mb-1'>{item.name}</h2>
              <p className='text-gray-600'>{item.description}</p>
              <hr className='divide-x my-4' />
              <div className='flex items-center gap-2'>
                <Link
                  href={`/update/${item._id}`}
                  className='text-blue-500 hover:underline'
                >
                  Edit
                </Link>

                <Delete id={JSON.stringify(item._id)} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
