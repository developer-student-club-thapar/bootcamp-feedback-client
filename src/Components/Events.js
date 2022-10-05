import React from "react";

function Events({ setEvent, event }) {
  const style =
    "bg-[#9296FF] hover:bg-[#6268FF] text-white font-bold py-2 px-4 rounded-full mx-2";
  const style2 =
    "bg-[#9296FF] hover:bg-[#6268FF] text-white font-bold py-2 px-4 rounded-full mx-2 border-2 border-indigo-500";
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-2">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() => {
              setEvent("ideas");
            }}
            className={event === "ideas" ? style2 : style}
          >
            Ideas
          </button>
        </div>
      </div>
    </>
  );
}

export default Events;
