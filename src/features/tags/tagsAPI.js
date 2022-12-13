import Axios from "../../utils/Axios";

export const getTags = async () => {
    const response = await Axios.get('/tags');
    return response.data
}