import {News} from './News';
import {HttpClientService} from '../../services/http-client.service';
import {ErrorPopup} from '../error-popup/ErrorPopup';
import {Constants} from '../../utils';
import '../../styles/news.scss';

class NewsList {
    constructor() {
        this.newsContainer = document.querySelector('.container_news');
        this.newsUrl = new URL(Constants.newsUrl);
    }

    async renderNewsList(sourceId) {
        while (this.newsContainer.firstChild) {
            this.newsContainer.removeChild(this.newsContainer.firstChild);
        }

        const urlParams = {sources: sourceId, apiKey: Constants.apiKey};
        try {
            const {articles} = await HttpClientService.getData(this.newsUrl, urlParams);
            articles.forEach(article => News.renderNews(article));
            return articles;
        } catch (e) {
            const errorPopup = await ErrorPopup.getInstance();
            errorPopup.show('News Error!', e);
        }
    }
}

export {NewsList};
