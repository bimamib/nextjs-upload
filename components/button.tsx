"use client";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";

export const SubmitButton = () => {
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
      Upload
    </button>
  );
};
