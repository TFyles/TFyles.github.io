$(document).ready(function () {

	console.log("Fucking work");

	function foo() {

		$(".merry").velocity({ opacity: 0 }, { duration: 1000})
			.velocity({ opacity: 1 }, { duration: 1000});

			$(".ho").velocity({ opacity: 1 }, { duration: 1000})
			.velocity({ opacity: 0 }, { duration: 1000});

			$(".photo").velocity({  rotateZ: "+=360" }, { duration: 5000, easing: "linear", loop: true});

		setTimeout(foo, 500);
	}

	foo();

});