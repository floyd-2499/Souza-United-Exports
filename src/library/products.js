import FencingStone from "../assets/collection/Fencing-Stone.png"
import VizagBlue from "../assets/collection/Vizag-Blue.png"

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
//     usage: ["WALL CLADDING", "TREADS", "DOOR SILL", "DOOR JAMB", "COUNTER TOPS", "FLOOR"  .... ]
// }

// Rules:  
// Only Demand Ranked 5 are shown as top products in home page

const productsList = [
    {
        id: 1,
        name: "Black Galaxy",
        description: "Black Galaxy Granite from India is prized for its deep black color and shimmering white and gold flecks. It's perfect for various uses, including countertops, flooring, and walls, both indoors and outdoors. Known for its luxury and durability, it's also popular for monuments and construction projects.",
        image: "https://drive.google.com/uc?id=1KjUwkaouuAaoow-8ruXnbaoXfNUkfov1",
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "210",
            current: "190",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20 MM",
                description: "Sqft"
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "GRAVEYARD", "STAIRS"]
    },
    {
        id: 2,
        name: "Viscount White",
        description: "Viscount white is a popular granite that features swirls of white, grey and black hues that flow together beautifully. this granite is suitable for any projects including counter tops, showe walls,shower seats.",
        image: "https://drive.google.com/uc?id=1T55vmVY3FM4nib7iStRY3A9YVtJGPn7x",
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 3
        },
        pricing: {
            actual: "150",
            current: "120",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "STAIRS"]
    },
    {
        id: 3,
        name: "Hassan Green Granite",
        description: "Hassan green granite is a type of granite known for its greenish hue and speckled pattern valued for its unique coloration, durability and versatility in architectural and design applications.",
        image: "https://drive.google.com/uc?id=1rMgZyxWqelmsJO6N60C0dacv_5RtkVtw",
        showSizeDetails: true,
        category: {
            color: "Green",
            demand: 2
        },
        pricing: {
            actual: "200",
            current: "180",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "STAIRS"]
    },
    {
        id: 4,
        name: "Blue Sapphire | Vizag Blue Granite",
        description: "Blue sapphire granite is an elegant combination of blue,grey,black and brown. this durable and versatile granite features a small intricate pattern of flecks, and is suited for use as granite countertops,backsplashes and more.",
        image: VizagBlue,
        showSizeDetails: true,
        category: {
            color: "Blue",
            demand: 3
        },
        pricing: {
            actual: "180",
            current: "150",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING"]
    },
    {
        id: 5,
        name: "Imperial Red",
        description: "Imperial red granite is a striking natural stone known for its deep red and pinkish tones, popular for both interior and exterior applications due to its durability and aesthetic appeal.",
        image: "https://drive.google.com/uc?id=1zU_T0Fqr9h19PLF-4qUVRMihiuVH15xR",
        showSizeDetails: true,
        category: {
            color: "Red",
            demand: 4
        },
        pricing: {
            actual: "80",
            current: "100",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "COUNTER_TOPS"]
    },
    {
        id: 6,
        name: "Coffee Brown Granite",
        description: "Coffee brown granite is a rich and elegant natural stone characterized by its deep brown color with black and grey flecks,its highly versatile and used extensively in kitchen countertops,vanities,flooring and wall cladding.",
        image: "https://drive.google.com/uc?id=1g-AmNh-GvNCSqIQ1lAngGzJWDppBeRSu",
        showSizeDetails: true,
        category: {
            color: "Brown",
            demand: 4
        },
        pricing: {
            actual: "100",
            current: "80",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "STAIRS"]
    },
    {
        id: 7,
        name: "Chima Pink Granite",
        description: "Chima pink granite is a beautiful natural stone known for its distinctive pink coloration with grey veins and specks.the unique color and pattern make it popular choice for addding warmth and elegance to residential and commercial spaces .",
        image: "https://drive.google.com/uc?id=1h3tLhfZbpsyehZ9niKjUWUvtHppsdgFl",
        showSizeDetails: true,
        category: {
            color: "Pink",
            demand: 5
        },
        pricing: {
            actual: "100",
            current: "80",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "WALL_CLADDING"]
    },
    {
        id: 8,
        name: "Tiger Red Granite",
        description: "Tiger Red granite is a stunning natural stone known for its striking appearance and durabilityis prized for its striking color palette, durability, and versatile applications.",
        image: "https://drive.google.com/uc?id=1O3JFE-5-A4npRnW8cBw4JPw9XZch4n8A",
        showSizeDetails: true,
        category: {
            color: "Red",
            demand: 5
        },
        pricing: {
            actual: "100",
            current: "80",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING"]
    },
    {
        id: 9,
        name: "Black Pearl Granite",
        description: "Black Pearl granite is a luxurious and sophisticated natural stone that is highly sought after for its distinctive appearance and durability,prized for its striking appearance, durability, and versatility, making it a popular choice for both residential and commercial applications where elegance and longevity are valued.",
        image: "https://drive.google.com/uc?id=1TcTVMC784LmcvDrYvJnmMPxUyQ6J5VDu",
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "100",
            current: "80",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "GRAVEYARD", "STAIRS"]
    },
    {
        id: 10,
        name: "Paradiso Granite",
        description: "Paradiso granite is a type of natural stone known for its striking appearance, primarily quarried in India. It is characterized by its swirling patterns of dark and light colors, usually combining shades of deep purple, grey, and black with streaks of white or light pink. ",
        image: "https://drive.google.com/uc?id=1lwhrPULQT4z-ppq44r7Jf6fzAp4MAZoZ",
        showSizeDetails: true,
        category: {
            color: "Grey",
            demand: 5
        },
        pricing: {
            actual: "150",
            current: "120",
            description: "sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "COUNTER_TOPS", "STAIRS"]
    },
    {
        id: 11,
        name: "Unpolished Slab(Raw)",
        description: "Freshly cut beautiful stones are often used in construction, landscaping, or other applications where a natural, unrefined look is desired. They are also the starting material for fabricators who will further cut, polish, or finish the stone according to specific project requirements.",
        image: "https://drive.google.com/uc?id=1KGGB0YU8MGlYdu2JGMIvdDgA9rSwhbdk",
        showSizeDetails: false,
        category: {
            color: "Grey",
            demand: 3
        },
        pricing: {
            actual: "200",
            current: "180",
            description: "Per sq.ft"
        },
        mesurement: [
            {
                type: "Slab",
                scale: "9*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["GARDEN_SPACE", "FOOT_PATH", "WALL_CLADDING", "MONUMENTS", "BENCH"]
    },
    {
        id: 12,
        name: "Fencing Stone",
        description: "these beautiful stones are made of tall narrow granite and are used for fencing, boundry markers and architectural features.known for its durability. customised based on height required .",
        image: FencingStone,
        showSizeDetails: true,
        category: {
            color: "Grey",
            demand: 5
        },
        pricing: {
            actual: "250",
            current: "200",
            description: "Per stone"
        },
        mesurement: [
            {
                type: "Pole",
                scale: "5fe",
                thickness: "4 inch",
                description: ""
            },
        ],
        usage: ["GARDEN_SPACE", "FENCING"]
    },
    {
        id: 13,
        name: "Size Stones ",
        description: "These beautiful stones are used for foundation, flooring, wall cladding and other architectural elements where durability and aesthetic appeal are essential./ .",
        image: "https://drive.google.com/uc?id=1x_7Oo7c3A6BOBmSpGffTpKiBfkgX4jKK",
        showSizeDetails: false,
        category: {
            color: "Grey",
            demand: 5
        },
        pricing: {
            actual: "20",
            current: "18",
            description: "Per block"
        },
        mesurement: [
            {
                type: "Block",
                scale: "-",
                thickness: "-",
                description: ""
            },
        ],
        usage: ["WALL_CLADDING", "FOUNDATIONS", "FENCING", "BRICK_WALL"]
    },
    {
        id: 14,
        name: "Raw Granite Block",
        description: "These raw granite blocks are robust, naturally occurring stones, ideal for the creation of detailed and enduring sculptures.",
        image: "https://drive.google.com/uc?id=1AlMHDd4bzsUXros0RGCgHF9hzY42QHKt",
        showSizeDetails: false,
        category: {
            color: "Grey",
            demand: 3
        },
        pricing: {
            actual: "250",
            current: "200",
            description: "The price per square foot is fixed, but the length and breadth can be customized based on the customer's requirements."
        },
        mesurement: [
            {
                type: "Block",
                scale: "Customizable",
                thickness: "-",
                description: ""
            },
        ],
        usage: ["GARDEN_SPACE", "MONUMENTS", "CUSTOMIZATION"]
    },
    {
        id: 15,
        name: "Pebbles",
        description: "Pebbles are small, smooth stones, often found on beaches or riverbeds, that come in various colors and sizes. They are commonly used in landscaping, interior decor, and crafts for their natural beauty and versatility.",
        image: "https://drive.google.com/uc?id=1MxCdvW87yBjAASmT8Nsw7gD8oB76wkjv",
        showSizeDetails: false,
        category: {
            color: "Multi - Colours",
            demand: 5
        },
        pricing: {
            actual: "25",
            current: "20",
            description: "per kg"
        },
        mesurement: [
            {
                type: "River Pebbles",
                scale: "",
                thickness: "Customized",
                description: ""
            },
        ],
        usage: ["GARDEN_SPACE", "WALL_CLADDING"]
    },
]

export default productsList