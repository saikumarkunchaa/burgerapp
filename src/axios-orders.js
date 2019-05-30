import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerdemoapp.firebaseio.com/'
});

export default instance;