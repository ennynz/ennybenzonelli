$(document).ready(function(){$(".menu-button, ul a").click(function(){$("ul").toggleClass("show-menu"),$(".menu-button").toggleClass("menu-open"),$(".menu-button").toggleClass("menu-close")}),$(document).scroll(function(){var s=$(this).scrollTop();s>600?$(".menu").removeClass("is-hidden").addClass("is-showing"):$(".menu").removeClass("is-showing").addClass("is-hidden")})});