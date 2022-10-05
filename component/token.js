import axios from "axios";

export default axios.create({
 baseURL: 'http://172.30.1.31:5000/auth'
});
