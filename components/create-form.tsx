import React from "react";

const CreateForm = () => {
  return (
    <form action="">
      <div className="mb-4 pt-2">
        <input
          type="text"
          name="title"
          className="py-2 px-4 w-full border border-gray-200 rounded-lg text-sm outline-none focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Title..."
        />
      </div>
      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 outline-none focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4"
        />
      </div>
      <div className="mb-4 pt-4">
        <button className="bg-blue-600 text-white w-full font-medium py-2.5 px-6 text-base rounded-lg hover:bg-blue-500">
          Upload
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
