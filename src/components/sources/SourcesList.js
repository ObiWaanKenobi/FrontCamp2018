import {HttpClientService} from '../../services/http-client.service';
import {ErrorPopup} from '../error-popup/ErrorPopup';
import {Constants} from '../../utils';


class SourcesList {
    constructor() {
        this.sourcesContainer = document.querySelector('.container_sources');
        this.sourcesUrl = new URL(Constants.sourcesUrl);
    }

    async renderSources() {
        const urlParams = {apiKey: Constants.apiKey};
        try {
            const {sources} = await HttpClientService.getData(this.sourcesUrl, urlParams);
            sources.forEach(({id, name}) => {
                const button = document.createElement('button');
                button.id = id;
                button.innerHTML = name;
                this.sourcesContainer.appendChild(button);
            });
        } catch (e) {
            const errorPopup = await ErrorPopup.getInstance();
            errorPopup.show('Sources Error!', e);
        }
    }

    onSourceClick(handler) {
        this.sourcesContainer.addEventListener('click', handler);
    }

    setActiveSource(activeButton) {
        this.sourcesContainer.querySelectorAll('button')
            .forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }
}

export {SourcesList};
