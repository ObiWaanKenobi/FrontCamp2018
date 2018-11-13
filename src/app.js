import {SourcesList} from './components/SourcesList';
import {NewsList} from './components/NewsList';
import {Utils} from './utils/utils';
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

        SourcesList.getSources(Utils.getSourcesListUrl(apiKey), sourcesContainer);

        sourcesContainer.addEventListener('click', ({target}) => {
            if (target instanceof HTMLButtonElement) {
                const {id, innerHTML} = target;
                this.setActiveButton(target, sourcesContainer.querySelectorAll('button'));
                NewsList.getNews(Utils.getSourceNewsUrl(id, apiKey), newsContainer)
                    .then(news => this.setHeaderInfo(innerHTML, news.length));
            }
        });
    }
}

const app = new App();
app.renderPage();
