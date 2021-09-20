let button = document.querySelector('.content_burger-btn');
let menu = document.querySelector('.content_burger-menu');


let anchors = document.querySelectorAll('.content_burger-menu li a');


button.addEventListener('click', () => {
    menu.classList.toggle('active');
});

for (let anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            let anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
}


console.log('вёрстка валидная: +10');
console.log('вёрстка семантическая: +20');
console.log('css-стили: +10');
console.log('контент размещается в блоке, который горизонтально центрируется: +10');
console.log('вёрстка адаптивная: +10');
console.log('есть адаптивное бургер-меню: +10');
console.log('на странице СV присутствует изображение - фото или аватарка: +10');
console.log('контакты для связи и перечень навыков оформлены в виде списка ul > li: +10');
console.log('CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского: +10');
console.log('CV содержит пример вашего кода: +10');
console.log('CV содержит изображения-ссылки на выполненные вами проекты: +10');
console.log('CV выполнено на английском языке: +10');
console.log('выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages: +10');
console.log('есть видеорезюме автора CV на английском языке: 0');
console.log('дизайн, оформление, качество выполнения CV не ниже чем в примерах CV: +10');

console.log('result: 150');