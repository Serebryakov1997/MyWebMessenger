import { Main } from './pages/Main';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    function getPage() {
        console.log('window.location.pathname: ', window.location.pathname);
        switch (window.location.pathname) {
            case '/':
                return Main();
            default:
                return 'Not Found'; // temporary
        }
    }

    root.innerHTML = getPage();
});