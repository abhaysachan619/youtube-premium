import React from "react";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const LongVideoCard = (data) => {
    const videoId = data.data?.id.videoId;
    const imgURL = data.data?.snippet.thumbnails.medium.url;
    const desciption = data.data?.snippet.description;
    const title = data.data?.snippet.title;
    //const views = data.data?.statistics.viewCount;
    const channelTitle = data.data?.snippet.channelTitle;
    const dispatch = useDispatch();
    const hideSidebar = () => {
        dispatch(closeMenu());
    };
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    const isMobile = width <= 768;
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);
    const calcViews = (views) => {
        if (views >= 1000000000) return `${views / 1000000000}B views`;
        if (views >= 1000000) return `${views / 1000000000}M views`;
        if (views >= 1000) return `${views / 1000000000}K views`;
        return `${views} views`;
    };
    return (
        <Link
            to={"/watch?v=" + videoId}
            key={videoId}
            onClick={() => hideSidebar()}
        >
            <div className="flex flex-row m-2 p-2 hover:bg-blue-50">
                <div className={isMobile ? "w-1/3" : "w-1/4"}>
                    <img src={imgURL} alt={title} className="rounded-xl" />
                </div>
                <div className="p-2 m-2">
                    <h1
                        className={
                            "font-semibold " +
                            (isMobile ? "text-sm" : "text-lg")
                        }
                    >
                        {title.length >= (isMobile ? 26 : 70)
                            ? title.substring(0, isMobile ? 25 : 69) + "..."
                            : title}
                    </h1>
                    <p className={isMobile ? "text-xs" : ""}>
                        {channelTitle.length >= (channelTitle ? 26 : 70)
                            ? channelTitle.substring(
                                  0,
                                  channelTitle ? 25 : 69
                              ) + "..."
                            : channelTitle}
                    </p>
                    {!isMobile && (
                        <p className="text-sm font-light">{desciption}</p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default LongVideoCard;
