import React from "react";

function ConfirmPasword({ samePassword }) {
  
  return (
    <div>
      {!samePassword && (
        <span className="text-red-700 text-base font-semibold absolute left-0">
          Las dos contraseñas deben ser iguales
        </span>
      )}
    </div>
  );
}

export default ConfirmPasword;
