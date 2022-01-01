import React from "react";
import NotFound from "../components/NotFound";
import Loading from "../containers/Loading";

const Page404 = ({ loading }) => {
    return <>{loading ? <Loading /> : <NotFound />}</>;
};

export default Page404;
