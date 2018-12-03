class ErrorPopup {
    static getInstance() {
        if (!ErrorPopup.instance) {
            ErrorPopup.instance = new ErrorPopup();
        }

        return ErrorPopup.instance;
    }

    async show(message) {
        const {getErrorPopupHTML} = await import('./ErrorPopupUtil.js');
        document.body.innerHTML += getErrorPopupHTML(message);

        const closeButton = document.querySelector('.error-popup_button');
        closeButton.addEventListener('click', this.close);
    }

    close() {
        const popupElem = document.querySelector('.error-popup');
        popupElem.style.display = 'none';
    }
}

export {ErrorPopup};
