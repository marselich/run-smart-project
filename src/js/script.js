
const prev = document.querySelector('.carousel__prev'),
	next = document.querySelector('.carousel__next');



var slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	controls: false,
	nav: false,
	center: true,
});

prev.addEventListener('click', () => {
	slider.goTo('prev');
});

next.addEventListener('click', () => {
	slider.goTo('next');
});

//табы
const tabs = document.querySelectorAll('.catalog__tab');
const contents = document.querySelectorAll('.catalog__content');

tabs.forEach((elem, index) =>
	elem.addEventListener('click', () => {
		if (!elem.classList.contains('catalog__tab_active')) {
			document.querySelector('.catalog__tab_active').classList.remove('catalog__tab_active');
			elem.classList.add('catalog__tab_active');
			document.querySelector('.catalog__content_active').classList.remove('catalog__content_active');
			contents[index].classList.add('catalog__content_active');
		}
	})
);


const showMoreLink = document.querySelectorAll('.catalog-item__link');
const backLink = document.querySelectorAll('.catalog-item__back');

showMoreLink.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		e.preventDefault();
		elem.parentElement.classList.remove('catalog-item__main_active');
		elem.parentElement.nextElementSibling.classList.add('catalog-item__more_active');
	})
});

backLink.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		e.preventDefault();
		elem.parentElement.classList.remove('catalog-item__more_active');
		elem.parentElement.previousElementSibling.classList.add('catalog-item__main_active');
	})
});

// class TabList {
// 	constructor(tabs, contents) {
// 		this.tabs = tabs;
// 		this.contents = contents;

// 		this.tabs.addEventListener('click', event => {
// 			const index = event.target.closest('.catalog__tab').dataset.value;

// 			this.openTab(index);
// 		});
// 	}

// 	openTab(index) {
// 		this.contents.querySelector('.catalog__tab_active').classList.remove('catalog__tab_active');
// 		this.contents.querySelector(`.tab--${index}`).classList.add('active');
// 	}
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	const tabs = document.querySelector('.catalog__tabs');
// 	const contents = document.querySelector('.catalog__content');

// 	const tabList = new TabList(tabs, contents);
// })