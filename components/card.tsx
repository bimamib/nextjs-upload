import Image from "next/image";
import { DeleteButton, EditButton } from "@/components/button";

const Card = () => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-xl shadow">
      <div className="p-3">
        <div className="relative aspect-video">
          <Image
            src=""
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-800 truncate">Title</h1>
      </div>
      <div className="flex items-center justify-between">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default Card;
