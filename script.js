"use strict";

const button = document.querySelector('#btn');
const buttonInSquare = document.querySelector('#e_btn');
const text = document.querySelector('#text');
const square = document.querySelector('#square');
const range = document.querySelector('#range');
const rangeValue = document.querySelector('#range-span');
const circle = document.querySelector('#circle');

button.addEventListener('click', function () {
    square.style.backgroundColor = text.value;
    text.value = '';
});

buttonInSquare.addEventListener('click', function () {
    buttonInSquare.style.display = 'none';
});

range.addEventListener('input', function () {
    rangeValue.textContent = range.value;
    circle.style.width = range.value + '%';
    circle.style.height = range.value + '%';
});





