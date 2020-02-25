import React from "react";

const Div = React.forwardRef((props, ref) => {
    return (
        <div {...props} ref={ref}>
            {props.children}
        </div>
    );
});

export {Div};