import axios from "axios";

export const getDogBreed = async(breed) => {
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/6`).then((data) => data.data.status === "error" ? false : data).catch(() => false);
    if(res !== false){
        return res.data.message
    }else{
        return false
    }
    
}