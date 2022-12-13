import Axios from "../../utils/Axios";

export const getVideo = async (id) => {
    const response = await Axios.get(`/videos/${id}`);
    return response.data
}