'use strict';
const recipeName = document.querySelector('.header__title');
const selectAllBtn = document.querySelector('.selectall');
const unSelectAllBtn = document.querySelector('.unselectall');
const ingredientList = document.querySelector('.ingredientslist__container');
// const totalItem = document.querySelector('.total__item');
// const totalIngredientsPrice= document.querySelector('.totalingredients__price');
const shipping = document.querySelector('.total__shipping');
// const totalPayment = document.querySelector('.total__payment');
const buy = document.querySelector('.btn__buy');

let Items = 0;
let price = 0;
let total = 0;
let selectedIngredients = [];

const getRecipe = () => {
	fetch('/risottoData.json').then((res) => res.json()).then((data) => {
		const recipe = data.recipe;
		listIngredients(recipe);
	});
};

const listIngredients = (recipe) => {
	recipeName.innerHTML = recipe.name;
	shipping.innerHTML += `${recipe.shippingcost} ${recipe.currency}`;

	const ingredients = recipe.ingredients;
	for (let item of ingredients) {
		ingredientList.innerHTML += `<input class="ingredient__checkbox" type="checkbox" name="ingredient">
    <input class="ingredient__units" type="number" name="quantity" min=1>
    <h3 class="ingredient__name">${item.product}</h3>
    <p class="ingredient__brand">${item.brand === undefined ? '' : item.brand}</p>
    <p class ="ingredient__quantity">${item.quantity}</p>
    <p class="ingredient__unitPrice">${item.price} ${recipe.currency}</p>

    `;
	}
};
const selectAll = (e) => {
	e.preventDefault();
	let checkedIngredients = document.querySelectorAll('.ingredient__checkbox');
	for (let check of checkedIngredients) {
		check.checked = true;
	}
};

const unSelectAll = (e) => {
	e.preventDefault();
	let checkedIngredients = document.querySelectorAll('.ingredient__checkbox');
	for (let check of checkedIngredients) {
		check.checked = false;
	}
};
getRecipe();
selectAllBtn.addEventListener('click', selectAll);
unSelectAllBtn.addEventListener('click', unSelectAll);
