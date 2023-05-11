const GOOGLE_API_KEY = "AIzaSyAzSlgbEi-AnCs1TDxsxofAYh4uvjsWGBc";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API = 
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+ 
GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 
  " https://cors-anywhere.herokuapp.com/https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


  // Live Chat >>>>> Infinite Scroll >>>>> Pagination


 export const YOUTUBE_ALL_VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=" +
    GOOGLE_API_KEY;
export const GET_SPECIFIC_VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
    GOOGLE_API_KEY;
export const GET_SET_OF_VIDEOS_DETAILS =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
    GOOGLE_API_KEY +
    "&id=";
export const GET_LIST_OF_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
    GOOGLE_API_KEY +
    "&q=";
export const GET_COMMENT_API =
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=60&key=" +
    GOOGLE_API_KEY +
    "&videoId=";
export const GET_RECOMMENDED_VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" +
    GOOGLE_API_KEY +
    "&maxResults=40&relatedToVideoId=";
export const GET_CHANNEL_DETAILS_API =
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
    GOOGLE_API_KEY +
    "&id=";


  
