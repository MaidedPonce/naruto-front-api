import React from "react";
import ReactDOM from "react-dom";
import LazyLoad from "../components/LazyLoad";

const Loading = () => {
    return ReactDOM.createPortal(
        <LazyLoad />,
        document.getElementById("loading")
    );
};

export default Loading;
