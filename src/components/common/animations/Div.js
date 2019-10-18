import React from "react";

export default React.forwardRef((props, ref) => {
    return (
        <div {...props} ref={ref}>
            {props.children}
        </div>
    );
});