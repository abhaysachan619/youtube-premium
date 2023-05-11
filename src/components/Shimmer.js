import React from "react";
import { useSelector } from "react-redux";

const VShimmer = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return (
        <div className="m-2 p-1 rounded-md">
            <div
                className={
                    (isMenuOpen ? "h-36" : "h-40") + " bg-slate-200 rounded-lg"
                }
            ></div>
            <div className={isMenuOpen ? "px-2 w-60" : "px-2 w-72"}>
                <h1 className="h-4 m-2 rounded-full bg-slate-200"></h1>

                <div className="my-3 mx-5">
                    <p className="h-2 m-2 rounded-full bg-slate-200"></p>
                </div>
            </div>
        </div>
    );
};

const Shimmer = () => {
    return (
        <div className="flex flex-wrap mt-6">
            {Array(20)
                .fill("")
                .map((item, index) => (
                    <VShimmer
                        key={"aksjnaaoanacoicncvosbvsvosvbsdvjv" + index}
                    />
                ))}
        </div>
    );
};

export default Shimmer;
