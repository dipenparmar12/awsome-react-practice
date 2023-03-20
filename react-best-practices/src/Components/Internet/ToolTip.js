import React from "react";

import "./ToolTip.css";

const Tooltip = ({ children, text, ...rest }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="tooltip-container">
      <div className={show ? "tooltip-box visible" : "tooltip-box"}>
        {text}
        <span className="tooltip-arrow" />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;

export const toolTipExample = (
  <>
    <div className="toolTipExample">
      <Tooltip text="Simple tooltiSimple tooltiSimple tooltiSimple tooltiSimple tooltip">
        <button>Hover me!</button>
      </Tooltip>
    </div>
  </>
);
