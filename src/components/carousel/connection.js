import axios from "axios";

export const ConnectRandomDogs = async() => {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random/5");
    return res.data.message;
}