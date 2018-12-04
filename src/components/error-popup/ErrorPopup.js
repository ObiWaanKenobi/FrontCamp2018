class ErrorPopup {
    static async getInstance() {
        if (!ErrorPopup.instance) {
            const {getErrorPopupHTML} = await import('./ErrorPopupUtil');
            document.querySelector('#app-container').insertAdjacentHTML('beforeend', getErrorPopupHTML());
            document.querySelector('.error-popup_button').addEventListener('click', () => {
                document.querySelector('.error-popup').classList.add('hidden');
            });

            ErrorPopup.instance = new ErrorPopup();
        }

        return ErrorPopup.instance;
    }

    show(header, message) {
        document.querySelector('.error-popup').classList.remove('hidden');
        document.querySelector('.error-popup_header').innerHTML = header;
        document.querySelector('.error-popup_message').innerHTML = message;
    }
}

export {ErrorPopup};
