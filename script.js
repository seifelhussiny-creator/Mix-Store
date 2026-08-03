const products = {

    hamad: [
        {name:"الحمد نباتي",price:150},
        {name:"الحمد طبيعي",price:190},
        {name:"ميكس الحمد",price:150},
        {name:"عرض الحمد ثلاثي أنصاص كاملة",price:200},
        {name:"الحمد 200 جم موتزاريلا أو ميكس",price:32}
    ],

    afandina: [
        {name:"أفندينا نباتي",price:130}
    ],

    hania: [
        {name:"هنية نباتي",price:150}
    ],

    ashkaa: [
        {name:"الأشقاء نباتي",price:150}
    ],

    hareef: [
        {name:"الحريف طبيعي",price:190}
    ],

    atbaa: [
        {name:"الأطباء طبيعي",price:190}
    ],

    syrian: [
        {name:"السوري طبيعي",price:190}
    ]

};


// جلب اسم الشركة من الرابط
const params = new URLSearchParams(window.location.search);

const company = params.get("company");

const productsDiv = document.getElementById("products");


// عرض المنتجات
if(productsDiv && products[company]){

    products[company].forEach(product=>{


        productsDiv.innerHTML += `

        <div class="product">

            <h3>
            ${product.name}
            </h3>


            <p class="price">
            ${product.price} جنيه
            </p>


            <button onclick="addToCart('${product.name}',${product.price})">

            🛒 أضف للسلة

            </button>


        </div>

        `;


    });

}