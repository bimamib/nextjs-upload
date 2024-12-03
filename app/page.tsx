import Card from "@/components/card";
import Link from "next/link";
import { getImages } from "@/lib/data";

export default async function Home() {
  const images = await getImages();

  return (
    <div className="max-w-screen-lg mx-auto py-14 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Latest Image</h1>
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <Link
            href="/create"
            className="w-full text-center py-2 px-4 sm:py-3 sm:px-6 bg-blue-600 hover:bg-blue-500 text-sm sm:text-base text-white rounded-lg"
          >
            Upload New Image
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {images.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
