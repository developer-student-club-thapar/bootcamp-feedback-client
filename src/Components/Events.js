import React from "react";

function Events({ setEvent }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-2">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() => {
              setEvent("ideas");
            }}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
          >
            Ideas
          </button>
          <button
            onClick={() => {
              setEvent("bootcamp");
            }}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
          >
            Bootcamp
          </button>
          <button
            onClick={() => {
              setEvent("notes");
            }}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
          >
            All
          </button>
        </div>
      </div>
    </>
  );
}

export default Events;
