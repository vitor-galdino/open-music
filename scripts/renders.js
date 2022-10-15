const renderGenreFilters = () => {
    const ul = document.querySelector(".genre-filter");
    ul.innerHTML = "";
    categories.map(category => {
        const li = document.createElement("li");
        li.innerHTML = `<button class="default-btn filter-btn">${category}</button>`;
        ul.append(li);
    });
}
renderGenreFilters();

const renderAlbumsCards = () => {
    albumCard(products);
}

const albumCard = (obj) => {
    const ul = document.querySelector(".cards");
    ul.innerHTML = "";
    obj.map(product => {
        const { title, category, price, img, band, year, id } = product;
        const li = document.createElement("li");
        li.id = id;
        li.innerHTML = `
        <img src="${img}" alt="${title} image">
        <div class="content-box">
            <div class="info-box">
                <span>${band}</span>
                <span>${year}</span>
            </div>
            <h3>${title}</h3>
            <div class="buy-box">
                <span>${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <button class="default-btn">Comprar</button>
            </div>
        </div>
        `;
        ul.append(li);
    });
}

renderAlbumsCards();

const showPriceFilter = () => {
    let check = true;
    let max = 0;
    let min = products[0].price;
    products.map(product => {
        product.price >= max ? max = product.price : null;
        product.price <= min ? min = product.price : null;
    })

    const showPrice = document.querySelector(".show-price");
    if (check) {
        showPrice.innerHTML = `Até R$ 240,00`;
        check = false;
    } else {
        showPrice.innerHTML = `Até ${min.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    }

    const filter = document.querySelector(".range-filter");
    filter.max = max, filter.min = min;
}
showPriceFilter();