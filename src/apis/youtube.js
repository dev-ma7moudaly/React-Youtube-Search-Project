import axios from 'axios';

const KEY = 'AIzaSyD7BTI7zfYVE9ZYSgBlwAGmMJoCipP-gYo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


