import 'babel-polyfill';
import {SourcesList} from './components/sources/SourcesList';

class App {
    setHeaderInfo(source, newsAmount) {
        document.querySelector('.header_source').innerHTML = `Source: ${source}`;
        document.querySelector('.header_amount').innerHTML = `News amount: ${newsAmount}`;
    }

    renderPage() {
        const sourcesList = new SourcesList();

        sourcesList.renderSources();
        sourcesList.onSourceClick(async ({target}) => {
            if (target instanceof HTMLButtonElement) {
                const {id, innerHTML} = target;
                const {NewsList} = await import(/* webpackChunkName: "newsList" */'./components/news/NewsList');
                const newsList = new NewsList();
                const news = await newsList.renderNewsList(id);
                sourcesList.setActiveSource(target);
                this.setHeaderInfo(innerHTML, news.length);
            }
        });
    }
}

window.addEventListener('load', () => {
    const app = new App();
    app.renderPage();
});
