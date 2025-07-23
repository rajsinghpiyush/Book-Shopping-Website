let addToCart= document.querySelectorAll('.add');
let cartbtn= document.getElementById('cart');
let cartamount=document.getElementById('amt');

var totalRupees = 0;

let whatsappLink = "https://api.whatsapp.com/send?phone=7986200152&text=Order%20details"

let shop= [
    {
        name: "This was our Pact",
        quantity: 0,
        rupees: 749
    },
    {
        name: "The famous five",
        quantity: 0,
        rupees: 459
    },
    {
        name: "Matilda",
        quantity: 0,
        rupees: 680
    },
    {
        name: "Harry Potter",
        quantity: 0,
        rupees: 700
    },
    {
        name: "For Young Readers",
        quantity: 0,
        rupees: 729
    },
    {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        rupees: 499
    },
    {
        name: "Dart Board",
        quantity: 0,
        rupees: 1659
    },
    {
        name: "Connect Four",
        quantity: 0,
        rupees: 1999
    },
    {
        name: "Jenga",
        quantity: 0,
        rupees: 1599
    },
    {
        name: "Monopoly",
        quantity: 0,
        rupees: 1849
    },
    {
        name: "Bookmarks",
        quantity: 0,
        rupees: 1749
    },
    {
        name: "Birthday Card",
        quantity: 0,
        rupees: 1999
    },
    {
        name: "Stuffed toys",
        quantity: 0,
        rupees: 1299
    },
    {
        name: "Dream catcher drawing",
        quantity: 0,
        rupees: 1299
    },
];

function updateCart() {
    let cartVal = 0;
    for (let i = 0; i < shop.length; i++) {
        cartVal += shop[i].quantity;
    }
    cartamount.innerHTML = `(${cartVal})`;
}

function updatePrice() {
    let totalPrice= 0;
    for (let i = 0; i < shop.length; i++) {
        totalPrice += shop[i].quantity * shop[i].rupees
    }
    totalRupees=totalPrice;
}


function updateWhatsappLink() {
    let whatsappOrder = whatsappLink; 
    for (let i = 0; i < shop.length; i++) {
        if (shop[i].quantity != 0) {
            whatsappOrder += `%0A${shop[i].name}:%20${shop[i].quantity}`;
        }
    }   
    whatsappOrder += `%0A%0ATotal%20Price:%20₹${totalRupees}`;
    return whatsappOrder;
}

for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', function () {
        shop[i].quantity++;
        updateCart();
    });
}

cartbtn.onclick = () => {
    updatePrice();

    let finalWhatsappLink = updateWhatsappLink();
    window.open(finalWhatsappLink, "_blank");


    for (let i = 0; i < shop.length; i++) {
        if (shop[i].quantity != 0) {
            console.log(`Item name: ${shop[i].name} - Quantity: ${shop[i].quantity}`);
        }
    }

    console.log(`The Total amount is ₹${totalRupees} and ${totalPaise} paise`);
}

