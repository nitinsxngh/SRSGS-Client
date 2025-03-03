import axios from "axios";

// create axios instance
const axiosPublic = axios.create({
     baseURL: 'http://localhost:5001'
    // baseURL: 'https://motor-mingle-server.vercel.app'
})


const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;