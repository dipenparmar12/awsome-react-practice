import React, { useContext } from "react";
import AlertContext from "../../Context/Alert/alertContext";

export const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.message}
      </div>
    )
  );
};

export default Alert;
