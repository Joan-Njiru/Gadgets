const productContainer=document.getElementById('products')
const getProducts =()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response =>response.json())
    .then(response=> response)
    .catch(error=>error)
}

const displayProducts =async()=>{
    const product = await getProducts();
    console.log(product)
product.products.map( item => {
let div= document.createElement('div');
let image = document.createElement('img');
image.id='images';
let name = document.createElement('h2');
name.id='name'
let price = document.createElement('p');
let rating = document.createElement('p');

let discount = document.createElement('p')

image.src = item.images[0];
name.textContent = item.title;
price.textContent = item.price;
rating.textContent =item.rating;
discount.innerHTML= item.discountPercentage;
div.appendChild(image);
div.appendChild(name);
div.appendChild(price)
div.appendChild(rating)
div.setAttribute("key",item.id);
div.setAttribute('class','product');
productContainer.appendChild(div);
});
 }
 displayProducts()