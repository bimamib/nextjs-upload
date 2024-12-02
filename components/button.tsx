"use client";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { deleteImage } from "@/lib/actions";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-blue-600 text-white w-full font-medium py-2.5 px-6 text-base rounded-lg hover:bg-blue-500",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`edit/${id}`}
      className="flex items-center gap-2 py-3 px-2 text-sm bg-gray-50 rounded-bl-lg w-full hover:bg-gray-100 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M10 7h7q.425 0 .713.288T18 8t-.288.713T17 9h-7q-.425 0-.712-.288T9 8t.288-.712T10 7m0 3h7q.425 0 .713.288T18 11t-.288.713T17 12h-7q-.425 0-.712-.288T9 11t.288-.712T10 10m2 10H5zm-6 2q-1.25 0-2.125-.875T3 19v-2q0-.425.288-.712T4 16h2V4q0-.825.588-1.412T8 2h11q.825 0 1.413.588T21 4v6q0 .425-.288.713T20 11t-.712-.288T19 10V4H8v12h3q.425 0 .713.288T12 17t-.288.713T11 18H5v1q0 .425.288.713T6 20h5q.425 0 .713.288T12 21t-.288.713T11 22zm8-1v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T16.65 22H15q-.425 0-.712-.287T14 21m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"
        ></path>
      </svg>
      Edit
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteImage.bind(null, id);
  return (
    <form
      action={deleteImageWithId}
      className="py-3 text-sm bg-gray-50 rounded-br-lg w-full hover:bg-gray-100 text-center"
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex items-center gap-2 px-2"
      disabled={pending}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
        ></path>
      </svg>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};
