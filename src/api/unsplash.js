import axios from 'axios';


export default axios.create({
    baseURL: "http//api.unsplash.com",
    headers: {
        Authorization: 
        'Client-ID 3900c27dbed4d8213555e724f551920c190e752ab8111bdbc01f2f321eb796d7'
    }
})