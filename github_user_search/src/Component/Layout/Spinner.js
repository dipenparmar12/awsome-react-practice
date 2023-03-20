import React, { Fragment } from "react";
import spinner from "../../Assets/spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='loading...'
      style={{ width: "300px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
