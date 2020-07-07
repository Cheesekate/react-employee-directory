import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=X29S-H253-29AQ-08O2";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    getEmployee() {
        return axios.get(BASEURL + APIKEY);
    }
};