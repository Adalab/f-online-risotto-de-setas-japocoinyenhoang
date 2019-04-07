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

let Item = 1;
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
		ingredientList.innerHTML += `<input class="ingredient" type="checkbox" name="ingredient">
    <input class="quantity" type="number" name="quantity" min=1>
    <label class="ingredient__name">${item.product}<label>`;
	}
};
getRecipe();
