import Constants from '../utils/constants';
import {Utils} from '../utils/utils';
// Enables IE11 support of template tag
import '../assets/template';

class News {
    static renderNews({
        title,
        publishedAt,
        description,
        urlToImage,
        url,
    }) {
        const newsElem = document.querySelector('#news-template').content;
        newsElem.querySelector('.news_title').innerHTML = title;
        newsElem.querySelector('.news_publishedAt').innerHTML = Utils.formatDate(publishedAt, 'ru');
        newsElem.querySelector('.news_description').innerHTML = description;
        newsElem.querySelector('.news_urlToImage').src = urlToImage || Constants.noImageUrl;
        newsElem.querySelector('.news_url').href = url;

        return newsElem;
    }
}

export {News};
