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
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"></path>
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
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
      </svg>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};
