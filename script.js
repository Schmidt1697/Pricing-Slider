const slider = document.querySelector(".slider");
const toggle = document.querySelector(".switch-input");
const toggleBack = document.querySelector(".switch");

let displayPageviews = document.querySelector(".pageviews");
let displayPrice = document.querySelector(".price");

//array of pricing/pageview options and to change slider color
const viewPackages = [10, 50, 100, 500, 1];
const pricePackages = [8, 12, 16, 24, 36];
const discountPackages = [72, 108, 144, 216, 324];
const sliderColor = [0, 1, 2, 3, 4];

// Display default slider value and pageviews value
displayPrice.innerHTML = `$${pricePackages[0]}.00`;
displayPageviews.innerHTML = `${viewPackages[0]}K PAGEVIEWS`;

let discounts = false;

//change price, pageviews, slider color as slider is moved
slider.addEventListener("click", function () {
	pricePackages.forEach((price, i) => {
		changePrice();
		if (slider.valueAsNumber === i) {
			slider.classList = `slider step${i}color`;
		}
	});
});

//change discounts to true when toggle btn is clicked and run changePrice function
toggle.addEventListener("change", function () {
	discounts = true;
	changePrice();
});

//check for toggle btn clicked AND slider position/value, then display corresponding values from arrays above
function changePrice() {
	discountPackages.forEach((price, i) => {
		if (toggle.checked === true && slider.valueAsNumber === i) {
			document.querySelector(".month").innerHTML = "/year";
			displayPrice.innerHTML = `$${discountPackages[i]}.00`;
		} else if (toggle.checked === false && slider.valueAsNumber === i) {
			displayPrice.innerHTML = `$${pricePackages[i]}.00 `;
			document.querySelector(".month").innerHTML = "/month";
		}
	});
}
