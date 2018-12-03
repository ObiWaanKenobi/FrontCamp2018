import '../styles/error-popup.scss';

const getErrorPopupHTML = (message = 'Default Error') => `
    <div class="error-popup">
        <div class="error-popup_content">
            <header class="error-popup_header"><h3>Error!</h3></header>
            <main class="error-popup_message">${message}</main>
            <button class="error-popup_button">Close</button>
        </div>
    </div>
`;

export {getErrorPopupHTML};
