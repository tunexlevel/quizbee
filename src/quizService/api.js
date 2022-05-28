import axios from "axios";


const api = {
    getData: ()=>{
        return axios({
            method: "GET",
            url:'https://opentdb.com/api.php?amount=10'
        })
    }
}
export default api;

