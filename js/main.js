$(document).ready(function() {

	$(".main-slider__items").slick({
		appendArrows: ".main-slider__arrows",
		prevArrow: "<button class='main-slider__prev main-slider__arrow'><i class='i-main-slider-prev'></i></button>",
		nextArrow: "<button class='main-slider__next main-slider__arrow'><i class='i-main-slider-next'></i></button>",
		dotsClass: "main-slider__dots",
		dots: true
	});

	$(".build__tabs").slick({
		slidesToShow: 6,
		arrows: false,
		focusOnSelect: true,
		// infinite: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				centerMode: true,
				variableWidth: true
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true
			}
		}]
	});

	$(".build-example-tabs").slick({
		slidesToShow: 3,
		arrows: false,
		infinite: false,

		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				infinite: true,
				arrows: true,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right"></i></button>'
			}
		}]
	})

	$(".build-example-tabs, .build__tabs, .project-tabs-table, .project-tabs-gallery").on('afterChange', function(slick, current) {
		
		if($(this).find(".active").hasClass(".slick-active")) {
			alert(123)
		} else {
			$(this).find(".active").removeClass('active')
			$(this).find(".slick-current a").tab('show')
		}
	});

	$(".build-example-contents__items").slick({
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 2
			},
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".service__items").slick({
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 993,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$(".reviews__prs").slick({
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		// appendArrows: ".reviews__arrows",
		prevArrow: "<button class='reviews__prev reviews__arrow'><i class='i-reviews-slider-prev'></i></button>",
		nextArrow: "<button class='reviews__next reviews__arrow'><i class='i-reviews-slider-next'></i></button>",
		asNavFor: ".reviews__comments",
		focusOnSelect: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false
			}
		}]
	})

	$(".reviews__comments").slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		asNavFor: ".reviews__prs"
	})

	$(".news__items").slick({
		slidesToShow: 4,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".video__items").slick({
		slidesToShow: 3,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".fancy").fancybox({
		margin: 80,
		helpers : {
    		title : {
    			type : 'outside'
    		}
    	}
	});

	$(".tags-filter__tag").click(function() {
		$(this).toggleClass("tags-filter__tag_active");

		var checkbox = $(this).find("input[type=checkbox], input[type=radio]");

		checkbox.prop('checked', !checkbox.prop('checked'))
	});

	$(".filter-settings__range-price").ionRangeSlider({
		 type: "double",
		 hide_from_to: true,
		 onChange: function (data) {
		 	
		 	$(".filter-settings__range-fields-group-field-from-price").val(data.from);
		 	$(".filter-settings__range-fields-group-field-to-price").val(data.to);
		 } 
	});

	$(".filter-settings__range-fields-group-field-to-price").change(function () {
		$(".filter-settings__range-price").data("ionRangeSlider").update({
			to: $(this).val()
		});
	})

	$(".filter-settings__range-fields-group-field-from-price").change(function () {
		$(".filter-settings__range-price").data("ionRangeSlider").update({
			from: $(this).val()
		});
	})

	$(".filter-settings__range-area").ionRangeSlider({
		 type: "double",
		 hide_from_to: true,
		 onChange: function (data) {
		 	
		 	$(".filter-settings__range-fields-group-field-from-area").val(data.from);
		 	$(".filter-settings__range-fields-group-field-to-area").val(data.to);
		 } 
	});

	$(".filter-settings__range-fields-group-field-to-area").change(function () {
		$(".filter-settings__range-area").data("ionRangeSlider").update({
			to: $(this).val()
		});
	})

	$(".filter-settings__range-fields-group-field-from-area").change(function () {
		$(".filter-settings__range-area").data("ionRangeSlider").update({
			from: $(this).val()
		});
	});

	$(".filter-sorts__criteria").click(function() {
		if($(this).hasClass("filter-sorts__criteria_active")) {
			$(this).toggleClass("filter-sorts__criteria_order_desc");
		} else {
			$(this).parent().find(".filter-sorts__criteria_active").removeClass("filter-sorts__criteria_active");
			$(this).addClass("filter-sorts__criteria_active");
		}
	});

	$(".project-gallery-slider__slides").slick({
		arrows: false,
		dots: true,
		asNavFor: ".project-gallery-slider__prs",
		infinite: false
	})

	$(".project-gallery-slider__prs").slick({
		arrows: false,
		slidesToShow: 4,
		asNavFor: ".project-gallery-slider__slides",
		focusOnSelect: true,
		infinite: false
	})

	$(".projects-slider__items").slick({
		slidesToShow: 3,
		infinite: false,
		arrows: false,

		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".project-tabs-gallery").slick({
		variableWidth: true,
		arrows: false,
		focusOnSelect: false,
		
		responsive: [{
			breakpoint: 2500,
			settings: {
				infinite: false,
				focusOnSelect: false,
				centerMode: false
			}
		},
		{
			breakpoint: 1201,
			settings: {
				infinite: true,
				focusOnSelect: true,
				centerMode: true
			}
		}]
	})

	$(".build-tabs__tab a, .build-example-tabs a, .project-tabs-gallery__tab a, project-tabs-table__tab a").click(function() {
		$(this).parent().parent().find(".active").removeClass("active");
	});

	// $(".project__gallery-tab .projecttabs-gallery__link").click(function () {
	// 	(".project-gallery-slider__prs").trigger('reInit');
	// });

	// $('.project__left .tab-content').on('shown', function (e) {
	//   (".project-gallery-slider__prs").trigger('reInit');
	// });

	$(".nav__icon").click(function() {
		$(this).toggleClass('nav-top__icon_open');
		$(".nav__container").toggleClass('nav__container_open');

		$("body").toggleClass('body-open-menu');
	});

	$('input.custom[type=checkbox], input.custom[type=radio]').styler();

	$(".project-tabs-table").slick({
		variableWidth: true,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				infinite: true,
				focusOnSelect: true,
				centerMode: true
			}
		}]

	})
	
});
//maps
$(document).ready(function() {
	ymaps.ready(init);

	function init () {

	// Создаем карту.
	var myMap = new ymaps.Map("map", {
	        center: [47.60, 41.8],
	        zoom: 9
	    }, {
	        searchControlProvider: 'yandex#search'
	    });

	// var polygonLayout = ymaps.templateLayoutFactory.createClass($("#maps-gallery-1").html());

 //    var polygonPlacemark = new ymaps.Placemark(
 //        myMap.getCenter(), {
 //            hintContent: 'HTML метка сложной формы'
 //        }, {
 //            iconLayout: polygonLayout,
 //            // Описываем фигуру активной области "Полигон".
 //            iconShape: {   
 //                type: 'Polygon',
 //                // Полигон описывается в виде трехмерного массива. Массив верхнего уровня содержит контуры полигона. 
 //                // Первый элемента массива - это внешний контур, а остальные - внутренние.
 //                coordinates: [
 //                    // Описание внешнего контура полигона в виде массива координат.
 //                    [[-28,-76],[28,-76],[28,-20],[12,-20],[0,-4],[-12,-20],[-28,-20]]
 //                    // , ... Описание внутренних контуров - пустых областей внутри внешнего.
 //                ]
 //            }
 //        }
 //    );

 BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            $("#maps-gallery-1").html() , {

            // Переопределяем функцию build, чтобы при создании макета начинать
            // слушать событие click на кнопке-счетчике.
            build: function () {
                // Сначала вызываем метод build родительского класса.
                BalloonContentLayout.superclass.build.call(this);
                // А затем выполняем дополнительные действия.
                $('.fancy').fancybox();
            },

            // Аналогично переопределяем функцию clear, чтобы снять
            // прослушивание клика при удалении макета с карты.
            // clear: function () {
            //     // Выполняем действия в обратном порядке - сначала снимаем слушателя,
            //     // а потом вызываем метод clear родительского класса.
            //     $('#counter-button').unbind('click', this.onCounterClick);
            //     BalloonContentLayout.superclass.clear.call(this);
            // },

            // onCounterClick: function () {
            //     $('#count').html(++counter);
            //     if (counter == 5) {
            //         alert('Вы славно потрудились.');
            //         counter = 0;
            //         $('#count').html(counter);
            //     }
            // }
        });

	// Создаем метку.
	var myPlacemark =  new ymaps.Placemark(myMap.getCenter(), {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/sprite/maps-mark.png',
            // Размеры метки.
            iconImageClipRect: [[0, 0], [66, 82]],
            iconImageSize: [66, 82],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-33, -79],
             // Запретим замену обычного балуна на балун-панель.
            balloonPanelMaxMapArea: 0,
            // Заставляем балун открываться даже если в нем нет содержимого.
            openEmptyBalloon: true,
            balloonContentLayout: BalloonContentLayout
        });

	myPlacemark.events.add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            e.get('target').options.set('iconImageClipRect', [[0, 83], [66, 164]]);
        })
        .add('mouseleave', function (e) {
            e.get('target').options.set('iconImageClipRect', [[0, 0], [66, 82]]);
        });

	// myPlacemark.events.add('click', function (e) {
	//     // Если меню метки уже отображено, то убираем его.
	//     if ($(".maps-gallery").css('display') == 'block') {
	//         $(".maps-gallery").css('display', 'none');
	//     } else {
	//     	$(".maps-gallery").css('display', 'block');

	//         // Задаем позицию меню.
	//         $(".maps-gallery").css({
	//             left: e.get('pagePixels')[0],
	//             top: e.get('pagePixels')[1] + 30,
	//             position: 'absolute'
	//         });


	       
	    
	//     }
	// });

	// myPlacemark.events.add('balloonopen', function (e) {
		 
      
 //      // myPlacemark.properties.set('balloonContent', $("#maps-gallery-1").html().replace(/\s+/g,' '));
 //      // placemark.properties.set('balloonContent', '4313214');
 //  });



	myMap.geoObjects.add(myPlacemark);

	
	}
});