import Image from "next/image";
import { DeleteButton, EditButton } from "@/components/button";
import type { Upload } from "@prisma/client";

const Card = ({ data }: { data: Upload }) => {
  return (
    <div className="w-full max-w-3xl border rounded-xl shadow overflow-hidden">
      <div className="p-2">
        <div className="relative aspect-video">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-900 truncate">
          {data.title}
        </h1>
      </div>
      <div className="flex items-center justify-between gap-x-2 px-2 py-2">
        <EditButton id={data.id} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};

export default Card;
