import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GET_LIST_OF_VIDEOS_API } from "../utils/Constants";
import LongVideoCard from "./LongVideoCard";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = React.useState([]);

    const query = searchParams.get("search_query");
    //console.log(query);
    const getVideoList = async () => {
        const data = await fetch(GET_LIST_OF_VIDEOS_API + query);
        const json = await data.json();
        //console.log("Searched Result", json.items);
        setSearchResults(json.items);
    };
    useEffect(() => {
        getVideoList();
    }, [query]);
    return (
        <div>
            {searchResults &&
                searchResults.map((searchResult) => (
                    <LongVideoCard
                        data={searchResult}
                        key={searchResult.id.videoId}
                    />
                ))}
        </div>
    );
};

export default SearchPage;