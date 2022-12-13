import Axios from "../../utils/Axios";

export const getRelatedVideos = async ({ tags, id }) => {
    const limit = 5;
    let queryString = tags.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') +
        `&id_ne=${id}&_limit=${limit}`
        : `&id_ne=${id}&_limit=${limit}`;

    const response = await Axios.get(`/videos?${queryString}`);
    return response.data
}