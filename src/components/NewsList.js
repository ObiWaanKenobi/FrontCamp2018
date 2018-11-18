import {Utils} from '../utils/utils';
import {News} from './News';

class NewsList {
    constructor(newsContainer) {
        this.newsContainer = newsContainer;
    }

    async getNews(newsUrl) {
        this.newsContainer.innerHTML = '';
        const {articles} = await Utils.getData(newsUrl);
        articles.forEach((article) => {
            const news = News.renderNews(article);
            this.newsContainer.appendChild(document.importNode(news, true));
        });
        return articles;
    }
}

export {NewsList};
