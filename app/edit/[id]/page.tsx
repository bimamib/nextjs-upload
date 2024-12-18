import EditForm from "@/components/edit-form";
import { getImageById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const data = await getImageById(id);
  if (!data) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white rounded-xl shadow p-8">
        <h1 className="text-2xl font-bold mb-5">Update Image</h1>
        <EditForm data={data} />
      </div>
    </div>
  );
};

export default EditPage;
