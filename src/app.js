import 'babel-polyfill';
import 'isomorphic-fetch';
import 'nodelist-foreach-polyfill';
import {SourcesList} from './components/SourcesList';
import {Utils} from './utils/utils';
import {ErrorPopup} from './error-handler/ErrorPopup';
import Constants from './utils/constants';

class App {
    setActiveButton(activeButton, buttonList) {
        buttonList.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }

    setHeaderInfo(source, newsAmount) {
        document.querySelector('.header_source').innerHTML = `Source: ${source}`;
        document.querySelector('.header_amount').innerHTML = `News amount: ${newsAmount}`;
    }

    renderPage() {
        const {apiKey} = Constants;
        const sourcesContainer = document.querySelector('.container_sources');
        const newsContainer = document.querySelector('.container_news');
        const sourcesList = new SourcesList(sourcesContainer);

        sourcesList.getSources(Utils.getSourcesListUrl(apiKey))
            .then(() => {
                sourcesContainer.addEventListener('click', async ({target}) => {
                    if (target instanceof HTMLButtonElement) {
                        const {id, innerHTML} = target;
                        const {NewsList} = await import(/* webpackChunkName: "newsList" */'./components/NewsList.js');
                        const newsList = new NewsList(newsContainer);
                        const news = await newsList.getNews(Utils.getSourceNewsUrl(id, apiKey));
                        this.setActiveButton(target, sourcesContainer.querySelectorAll('button'));
                        this.setHeaderInfo(innerHTML, news.length);
                    }
                    else {
                        const a = ErrorPopup.getInstance().show();
                        console.log('a', a);
                    }
                });

            });
    }
}

const app = new App();
app.renderPage();
