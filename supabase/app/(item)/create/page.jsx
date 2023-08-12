import Form from "@/components/Form";

function Page() {
  return (
    <main className='max-w-5xl mx-auto p-8'>
      <h1 className='text-2xl font-semibold mb-4'>Create item</h1>

      <Form mode='create' />
    </main>
  );
}

export default Page;
