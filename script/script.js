const products = [
    {
        "product_id" : 1,
        "product_Name" : "product 1",
        "product_Detail" :"this is product 1 with property ...",
        "price" : 109
    },
    {
        "product_id" : 2,
        "product_Name" : "product 2",
        "product_Detail" :"this is product 2 with property ...",
        "price" : 90
    },
    {
        "product_id" : 3,
        "product_Name" : "product 3",
        "product_Detail" :"this is product 3 with property ...",
        "price" : 180
    },
    {
        "product_id" : 4,
        "product_Name" : "product 4",
        "product_Detail" :"this is product 4 with property ...",
        "price" : 125
    },
    {
        "product_id" : 5,
        "product_Name" : "product 5",
        "product_Detail" :"this is product 5 with property ...",
        "price" : 300
    },
]

function discountPrice(price)
{
    
    let discount =0
     if(price > 100)
     {
        discount = Math.ceil((price - 100) * 0.3);
        if(discount > 25)
                discount = 25
     }
     return discount;
}
console.log(discountPrice(125))
let text=''
products.map(product => {
    if(discountPrice(product.price) !=0)
    {
        let pricePercent = discountPrice(product.price) / 100;
        console.log(product.price,pricePercent,product.price * pricePercent)
        text +=` <div class="product">
          <h2>${product.product_Name}</h2>
          <p>${product.product_Detail}</p>
          <div>
            <label>price :</label>
            <span><del>${product.price}</del></span>
            <span>${product.price - product.price * pricePercent} $</span>
          </div>
        </div>`
    }
    else
    {
        text +=`<div class="product">
          <h2>${product.product_Name}</h2>
          <p>${product.product_Detail}</p>
          <div>
            <label>price :</label>
            <span>${product.price} $</span>    
          </div>
        </div>`
    }
})

document.querySelector('.products').innerHTML = text

