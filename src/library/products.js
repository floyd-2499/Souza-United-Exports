// Schema
// {
//     id: number,
//     name: string,
//     description: string,
//     category: {
//         color: Black / Blue / Grey / Red / Green,
//         demand: 1 / 2/ 3 / 4 / 5,
//     },
//     pricing: {
//         actual: number,
//         current: number,
//         description: per sqFt / sqmt
//     },
//     mesurement: {
//         type: slab / block / tile / anything else,
//         scale: specification,
//         thickness: specification in mm,
//         description: sqft / sqmt
//     },
//     usage: ["WALL CLADDING", "TREADS", "DOOR SILL", "DOOR JAMB", "COUNTER TOPS"  .... ]
// }

// Rules:  
// Only Demand Ranked 5 are shown as top products in home page

const productsList = [
    {
        id: 1,
        name: "Black Galaxy",
        description: "Black Galaxy Granite from India is prized for its deep black color and shimmering white and gold flecks. It's perfect for various uses, including countertops, flooring, and walls, both indoors and outdoors. Known for its luxury and durability, it's also popular for monuments and construction projects.",
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 2,
        name: "Viscount White",
        description: "Viscount white is a popular granite that features swirls of white, grey and black hues that flow together beautifully. this granite is suitable for any projects including counter tops, showe walls,shower seats.",
        category: {
            color: "White",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 3,
        name: "Hassan Green Granite",
        description: "Hassan green granite is a type of granite known for its greenish hue and speckled pattern valued for its unique coloration, durability and versatility in architectural and design applications.",
        category: {
            color: "Green",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 4,
        name: "Blue Sapphire Granite",
        description: "Blue sapphire granite is an elegant combination of blue,grey,black and brown. this durable and versatile granite features a small intricate pattern of flecks, and is suited for use as granite countertops,backsplashes and more.",
        category: {
            color: "Blue",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 5,
        name: "Imperial Red",
        description: "Imperial red granite is a striking natural stone known for its deep red and pinkish tones, popular for both interior and exterior applications due to its durability and aesthetic appeal.",
        category: {
            color: "Red",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 6,
        name: "Coffee Brown Granite",
        description: "Coffee brown granite is a rich and elegant natural stone characterized by its deep brown color with black and grey flecks,its highly versatile and used extensively in kitchen countertops,vanities,flooring and wall cladding.",
        category: {
            color: "Brown",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 7,
        name: "Chima Pink Granite",
        description: "Chima pink granite is a beautiful natural stone known for its distinctive pink coloration with grey veins and specks.the unique color and pattern make it popular choice for addding warmth and elegance to residential and commercial spaces .",
        category: {
            color: "Brown",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 7,
        name: "Copper Silk Granite",
        description: "Copper silk granite is a unique natural stone known for its exquisite blend of colors and pattern.it includes swirls of coppery hues mixed with shades of beige brown and sometimes hint of black.",
        category: {
            color: "Brown",
            demand: 4
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 8,
        name: "Tiger Red Granite",
        description: "Tiger Red granite is a stunning natural stone known for its striking appearance and durabilityis prized for its striking color palette, durability, and versatile applications.",
        category: {
            color: "Red",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },
    {
        id: 9,
        name: "Black Pearl Granite",
        description: "Black Pearl granite is a luxurious and sophisticated natural stone that is highly sought after for its distinctive appearance and durability,prized for its striking appearance, durability, and versatility, making it a popular choice for both residential and commercial applications where elegance and longevity are valued.",
        category: {
            color: "Black",
            demand: 4
        },
        pricing: {
            actual: "",
            current: "",
            description: ""
        },
        mesurement: [
            {
                type: "",
                scale: "",
                thickness: "",
                description: ""
            },
        ],
        usage: []
    },

]

export default productsList