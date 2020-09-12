export default
document.addEventListener('DOMContentLoaded',ev => {
    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
      };
    const switchThem = document.querySelector('.switch');
    let changeHueForBody = document.querySelector('body');
    changeHueForBody.classList.add(Theme.LIGHT);
        const savedSettings = localStorage.getItem('them');
        const parsedSettings = JSON.parse(savedSettings);
    if(localStorage.getItem('them') === localStorage.setItem('them', JSON.stringify(Theme.LIGHT)) ){
        return localStorage.setItem('them', JSON.stringify(Theme.LIGHT));
    } else {
        localStorage.setItem('them', JSON.stringify(parsedSettings));
        changeHueForBody.classList.remove(Theme.LIGHT);
        changeHueForBody.classList.add(Theme.DARK);

    }

    switchThem.addEventListener('change',switchThemEvent);
    function switchThemEvent(ev){
        if(changeHueForBody.classList.contains(Theme.LIGHT)){
            changeHueForBody.classList.replace(Theme.LIGHT,Theme.DARK);
            localStorage.setItem('them', JSON.stringify(Theme.DARK));
            return;
        }
        if(changeHueForBody.classList.contains(Theme.DARK)){
            changeHueForBody.classList.replace(Theme.DARK,Theme.LIGHT);
            localStorage.setItem('them', JSON.stringify(Theme.LIGHT));
            return;
        }
    };
})

// Реализуй функционал изменения темы при нажатии (событие change) на чекбокс input.js-switch-input в тулбаре.
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения активной темы используй localStorage.
// Если при загрузке страницы тема темная, не забудь поставить свойство checked у чекбокса input.js-switch-input в true,
//  чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление Theme.

