import React from "react";

function ConfirmPasword({ samePassword }) {
  
  return (
    <div>
      {!samePassword && (
        <span className="text-red-700 text-xs absolute">
          Las dos contraseñas deben ser iguales
        </span>
      )}
    </div>
  );
}

export default ConfirmPasword;
