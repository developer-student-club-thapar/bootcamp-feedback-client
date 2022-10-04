import React, { useEffect } from "react";

function Events() {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <div className="flex flex-row items-center justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2">
          Ideas
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2">
          Bootcamp
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2">
          Misc
        </button>
      </div>
    </div>
  );
}

export default Events;
