let nameFilter = "Todos";
const activeFilterBtn = () => {
    const btn = document.querySelectorAll(".filter-btn");
    btn[0].classList.add("default-btn-active")
    btn.forEach(button => {
        if (button.classList.contains("default-btn-active")) {
            if (nameFilter === "Todos") {
                return false;
            }
            button.classList.remove("default-btn-active");
        } else if (!button.classList.contains("default-btn-active")) {
        }
        button.onclick = (e) => {
            activeFilterBtn();
            btn[0].classList.remove("default-btn-active");
            e.target.classList.toggle("default-btn-active");
            nameFilter = e.target.innerHTML;
            eventFilter();
        }
    })
}
activeFilterBtn();

const inputFilter = document.querySelector(".range-filter");
const eventFilter = (value = inputFilter.value) => {
    const obj = products.filter(product => {
        const { category, price } = product;
        if (category.includes(nameFilter) && parseInt(price) <= parseInt(value) && nameFilter != "Todos") {
            return product;
        } else if (nameFilter === "Todos" && parseInt(price) <= parseInt(value)) {
            return product;
        }
    })
    if (obj.length === 0) {
        const ul = document.querySelector(".cards");
        ul.innerHTML = `<span class="warning-span">Nenhum album encontrado</span>`;
    } else {
        albumCard(obj);
    }
}