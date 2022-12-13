import Axios from "../../utils/Axios";

export const getVideos = async () => {
    const response = await Axios.get('/videos');
    return response.data
}