import {logger} from '../utils';

const getUrl = (url, params) => {
    Object.entries(params)
        .forEach(([key, value]) => url.searchParams.set(key, value));
    return url;
};

class HttpClientService {
    @logger
    static async getData(url, params) {
        const response = await fetch(getUrl(url, params));
        const json = await response.json();
        if (json.status === 'error') {
            throw new Error(json.message);
        }
        return json;
    }

    static async postData() {
    }
}

export {HttpClientService};
