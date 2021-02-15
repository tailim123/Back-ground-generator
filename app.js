const pageBG = document.querySelector('body');

const firstColor = document.querySelector('#first-color');
const secondColor = document.querySelector('#second-color');

const bgColorProperty = document.querySelector('.bg-color-text');

const colorInputs = document.querySelectorAll('input');

for (var inputs of colorInputs) {
  inputs.addEventListener('input', () => {
    pageBG.style.background = `linear-gradient(120deg,${firstColor.value},${secondColor.value})`;
    bgColorProperty.innerText = pageBG.getAttribute('style');
    bgColorProperty.style.opacity = 0.5;
  });
}

storeCurrentBackground()
