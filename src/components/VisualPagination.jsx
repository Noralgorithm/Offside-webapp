import React from "react";

function VisualPagination({ total, actual }) {
  return (
    <div className="flex gap-3">
      {[...Array(total)].map((value, index) => {
        return (
          <div
            className={`h-3 w-3 rounded-full ${
              index === actual ? "bg-gradient-offside" : "bg-[#D9D9D9]"
            }`}
          ></div>
        );
      })}
    </div>
  );
}

export default VisualPagination;
