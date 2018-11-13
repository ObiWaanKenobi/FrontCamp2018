import {Utils} from '../utils/utils';
import {News} from './News';

class NewsList {
    static async getNews(newsUrl, newsContainer) {
        newsContainer.innerHTML = '';
        const {articles} = await Utils.getData(newsUrl);
        articles.forEach((article) => {
            const news = News.renderNews(article);
            newsContainer.appendChild(document.importNode(news, true));
        });
        return articles;
    }
}

export {NewsList};
