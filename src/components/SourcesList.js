import {Utils} from '../utils/utils';

class SourcesList {
    static getSources(sourcesUrl, sourcesContainer) {
        Utils.getData(sourcesUrl).then(({sources}) => {
            sources.forEach(({id, name}) => {
                const button = document.createElement('button');
                button.id = id;
                button.innerHTML = name;
                sourcesContainer.appendChild(button);
            });
        });
    }
}

export {SourcesList};
