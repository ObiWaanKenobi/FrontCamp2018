import '../../styles/error-popup.scss';

const getErrorPopupHTML = () => `
    <div class="error-popup">
        <div class="error-popup_content">
            <header class="error-popup_header"></header>
            <main class="error-popup_message"></main>
            <button class="error-popup_button">Close</button>
        </div>
    </div>
`;

export {getErrorPopupHTML};
