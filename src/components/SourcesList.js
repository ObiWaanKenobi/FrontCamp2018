import {Utils} from '../utils/utils';

class SourcesList {
    constructor(sourcesContainer) {
        this.sourcesContainer = sourcesContainer;
    }

    async getSources(sourcesUrl) {
        const {sources} = await Utils.getData(sourcesUrl);
        sources.forEach(({id, name}) => {
            const button = document.createElement('button');
            button.id = id;
            button.innerHTML = name;
            this.sourcesContainer.appendChild(button);
        });
    }
}

export {SourcesList};
