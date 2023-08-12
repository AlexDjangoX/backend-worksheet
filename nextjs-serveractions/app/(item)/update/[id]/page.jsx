import Form from "@/components/Form";
import { getItemById } from "@/lib/items.action";

async function Page({ params }) {
  const item = await getItemById({ id: params.id });

  return (
    <main className='max-w-5xl mx-auto p-8'>
      <h1 className='text-2xl font-semibold mb-4'>Update item</h1>

      <Form mode='update' item={JSON.stringify(item)} />
    </main>
  );
}

export default Page;
