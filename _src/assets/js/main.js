'use strict';
const recipeName = document.querySelector('.header__title');
const selectAllBtn = document.querySelector('.selectall');
const unSelectAllBtn = document.querySelector('.unselectall');
const ingredientlist = document.querySelector('.ingredientlist__container');
// const totalItem = document.querySelector('.total__item');
// const totalIngredientsPrice= document.querySelector('.totalingredients__price');
// const totalPayment = document.querySelector('.total__payment');
const buy = document.querySelector('.btn__buy');

let Item = 1;
let shipping = 7;
let selectedIngredients = [];

const getRecipe = () => {
	fetch('/risottoData.json').then((res) => res.json()).then((data) => {
		const recipe = data.recipe;
		console.log(recipe);
	});
};
getRecipe();
