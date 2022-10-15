const inputTrackSlider = () => {
    const input = document.querySelector(".range-filter");
    input.oninput = function () {
        inputLabelValue(this.valueAsNumber);
        eventFilter(this.valueAsNumber);
        const percentageValue = Math.floor((this.valueAsNumber - parseInt(this.min)) / (parseInt(this.max) - parseInt(this.min)) * 100);
        input.style = `background: linear-gradient(to right, var(--color-brand-1) ${percentageValue}%, var(--color-range) 0);`;
    }
}
inputTrackSlider();

const inputLabelValue = value => {
    const showPrice = document.querySelector(".show-price");
    showPrice.innerHTML = `Até ${value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
}