const addId = (params) => {
    if (params.length > 0) {
        return params.map(({image, name, amount}, idx) => {
            return {
                image,
                id: name + '_' + idx,
                name,
                amount
            }
        })
    }
}

let for_her = [
    {image: './images/Bag.JPG'
    , name: "Michael Kors Bag", 
    amount: 50
    }
    ,{image: './images/wsunglass.jpg'
    , name: "Sunglasses", 
    amount: 99
    }
    ,{image: './images/Coduroy.jfif'
    , name: "High waisted jeans", 
    amount: 39
    }
    ,{image: './images/dress.jpeg'
    , name: "Lovito dress", 
    amount: 450
    }
    ,{image: './images/oversized.jfif'
    , name: "Oversized T's", 
    amount: 299
    }
    ,{image: './images/bag1.jpg'
    , name: "Pink Bag", 
    amount: 350
    }
    ,{image: './images/top.jpg'
    , name: "Oversized T's", 
    amount: 399
    }
    ,{image: './images/earrings.jpg'
    , name: "Gold Sterling 14k", 
    amount: 265
    }
    ,{image: './images/Houndstooth Hairpin.jpg'
    , name: "Ribbon Hairpin", 
    amount: 59
    }
    ,{image: './images/black jeans.jpg'
    , name: "WideLeg Jeans ", 
    amount: 355
    }
    
]

let for_him = [
    {image: './images/polo.jpg'
     ,name: "Men Polo Shirt",
     amount: 200
    }
    ,{image: './images/White Rubber Shoes.jpg'
     ,name: "Rubber Shoes",
     amount: 399
    }
    ,{image: './images/jeans.jpg'
     ,name: "Neutral Jeans",
     amount: 550
    }
    ,{image: './images/sleeve.jpg'
     ,name: "Military longsleeve",
     amount: 315
    }
    ,{image: './images/tiktak.jpg'
     ,name: "Semi-formal shoes",
     amount: 650
    }
    ,{image: './images/cap.jpg'
     ,name: "Embroidedcap",
     amount: 399
    }
    ,{image: './images/nike.jpg'
     ,name: "Nike Shoes",
     amount: 399
    }
    ,{image: './images/mneck.jpg'
     ,name: "Sterling Silver chain",
     amount: 280
    }
    ,{image: './images/mbracelet.jpg'
     ,name: "Stainless Bracelet",
     amount: 260
    }
    ,{image: './images/oversized.jfif'
     ,name: "Oversized T's",
     amount: 299
    }
]

// images = [...images, ...images]

var rad_products_for_her = addId(for_her)
var rad_products_for_him = addId(for_him)