import {Constants, Utils} from '../../utils';
import {getNewsHTML} from './NewsUtil';

class News {
    static renderNews({
        title,
        publishedAt,
        description,
        urlToImage,
        url,
    }) {
        document.querySelector('.container_news').insertAdjacentHTML('beforeend',
            getNewsHTML(
                title,
                Utils.formatDate(publishedAt),
                description,
                urlToImage || Constants.noImageUrl,
                url,
            ));
    }
}

export {News};
