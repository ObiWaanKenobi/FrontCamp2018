class Utils {
    static async getData(url) {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }

    static getSourceNewsUrl(source, apiKey) {
        return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
    }

    static getSourcesListUrl(apiKey) {
        return `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
    }

    static formatDate(date, locale) {
        return new Intl.DateTimeFormat(locale).format(new Date(date));
    }
}

export {Utils};
