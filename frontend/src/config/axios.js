import axios from 'axios';

const http = axios.create({
    baseURL: process.env.APP_URL,
    headers: {
      'Content-type': 'application/json',
    }
    
  });

  export default http;