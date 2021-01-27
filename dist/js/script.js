
//slider

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

//tabs

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

//more btn

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


//popup on jquery

$(document).ready(function () {
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn();
	});

	$('[data-modal=order]').on('click', function () {
		$('.overlay, #order').fadeIn();
	});

	$('.modal__close').on('click', () => {
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
		});
	});

	//validation forms

	$('form').submit(function (e) {
		e.preventDefault();
	});

	const ValidateForm = (form) => {
		$(form).validate({
			rules: {
				name: {
					required: true,
					maxlength: 30
				},
				phone: "required",
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					maxlength: "Максимальная длинна символов {0}"
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен email"
				}
			},
			submitHandler: function () {
				$.ajax({
					type: "POST",
					url: "mailer/smart.php",
					data: $(form).serialize()
				}).done(function () {
					$(this).find('input').val('');
					$('#consultation, #order').fadeOut('fast');
					$('.overlay, #thanks').fadeIn('slow');

					$('form').trigger('reset');
				});
				return false;
			}
		}
		);
	}

	ValidateForm('#consultation-form');
	ValidateForm('#consultation form');
	ValidateForm('#order form');

	//mask for phone
	$("form [name=phone]").mask("+7 (999) 999-99-99");


	//scroll up and smooth 

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});

	$("a[href='#up']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
		return false;
	});


	var wowFadeInUp = new WOW(
		{
			boxClass: 'wow_fadeInUp',      // animated element css class (default is wow)
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
		}
	);
	wowFadeInUp.init();


	var wowFadeIn = new WOW(
		{
			boxClass: 'wow_fadeIn',      // animated element css class (default is wow)
			scrollContainer: document.querySelectorAll('.catalog-item'),    // optional scroll container selector, otherwise use window,
		}
	);
	wowFadeIn.init();

});



//popup on js: don't work animation

// const btns = document.querySelectorAll('.button'),
// 	overlay = document.querySelector('.overlay');

// const modals = document.querySelectorAll('.modal');
// const modalCloseBtn = document.querySelectorAll('.modal__close');

// const ShowModalWindow = (data) => {
// 	overlay.classList.add('overlay_active');
// 	document.getElementById(data).classList.add('modal_active');
// }

// btns.forEach((btn) => {
// 	btn.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		if (btn.dataset.modal === 'consultation') {
// 			ShowModalWindow('consultation');
// 		}
// 		else if (btn.dataset.modal === 'order') {
// 			ShowModalWindow('order');
// 		}
// 		else if (btn.dataset.modal === 'thanks') {
// 			ShowModalWindow('thanks');
// 		}
// 	});
// });

// const CloseModalWindow = (e) => {
// 	overlay.classList.remove('overlay_active');
// 	modals.forEach(modal => {
// 		modal.classList.remove('modal_active');
// 	});
// }

// modalCloseBtn.forEach((btn) => {
// 	btn.addEventListener('click', CloseModalWindow);
// });