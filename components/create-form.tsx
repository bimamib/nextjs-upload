"use client";
import React from "react";
import { uploadImage } from "@/lib/actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/button";

const CreateForm = () => {
  const [state, formAction] = useFormState(uploadImage, null);

  return (
    <form action={formAction}>
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          <div className="font-medium">{state?.message}</div>
        </div>
      ) : null}

      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 w-full border border-gray-200 rounded-lg text-sm outline-none focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Title..."
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.title}</p>
        </div>
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:outline-none focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none 
          file:bg-gray-100 
          file:border-0 
          file:me-4 
          file:py-2 file:px-4"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 pt-4">
        <SubmitButton label="upload" />
      </div>
    </form>
  );
};

export default CreateForm;
