import axios from "axios";

const instance = axios.create({
    baseURL:'https://react-burger-app-87e69-default-rtdb.firebaseio.com/'
});

export default instance;