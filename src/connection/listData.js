import axios from "axios";

export const listAllBreeds = async() => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all");
    const breeds = Object.keys(res.data.message)
    return breeds.map((item) => {
        return{
            id: item,
            value: item
        }
    })
};