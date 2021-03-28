const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5},
];

//Функция для формирования верстки каждого товара

// Добавила значения по умолчанию для аргументов функции.
const renderProduct = (title = "товар не найден", price = "уточните у оператора") => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    // Убрали запятые с помощью метода .join
    const productsList = list.map(item => renderProduct(item.title, item.price)).join("");
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);