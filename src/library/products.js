import FencingStone from "../assets/collection/Fencing-Stone.png"
import Black_Pearl from "../assets/collection/Black_Pearl.png"
import Ice_Blue from "../assets/collection/Ice_Blue.png"
import Kota_Stone from "../assets/collection/Kota_Stone.png"
import Majestic_Lapatro from "../assets/collection/Majestic_Lapatro.png"
import River_Black from "../assets/collection/River_Black.png"
import River_Brown from "../assets/collection/River_Brown.png"
import Spider_Web from "../assets/collection/Spider_Web.png"
import Teak_Wood from "../assets/collection/Teak_Wood.png"
import Tiger_Red from "../assets/collection/Tiger_Red.png"
import Viscon_White from "../assets/collection/Viscon_White.png"
import Chima_Pink from "../assets/collection/Chima_Pink.png"
import Sadarahalli from "../assets/collection/Sadarahalli.png"
import Vitrified from "../assets/collection/Vitrified.png"
import Glossy_Ceramic from "../assets/collection/Glossy_Ceramic.png"
import Matte from "../assets/collection/Matte.png"
import Carving from "../assets/collection/Carving.png"
import Sugar_Coated from "../assets/collection/Sugar_Coated.png"
import Parking from "../assets/collection/Parking.png"
import Wall_Cladding from "../assets/collection/Wall_Cladding.png"
import Double_Charged from "../assets/collection/Double_Charged.png"

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
    // Majestic Lapatro
    {
        id: 2,
        name: "Majestic Lapatro",
        description: "A durable, semi-gloss stone with subtle slip resistance, perfect for kitchen countertops, bathroom vanities, and dry-area flooring. It’s low maintenance, heat, stain, and scratch-resistant, adding a sleek, contemporary touch.",
        image: Majestic_Lapatro,
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "140",
            current: "130",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20 MM",
                description: "Sqft"
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "STAIRS"]
    },
    // Black Pearl
    {
        id: 5,
        name: "Black Pearl",
        description: "A luxurious black stone with white pearl-like patches, perfect for countertops, vanities, and flooring. Durable and elegant, it adds timeless beauty to any space.",
        image: Black_Pearl,
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "145",
            current: "130",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "COUNTER_TOPS"]
    },
    // River Black
    {
        id: 4,
        name: "River Black",
        description: "A sleek dark stone with flowing gray and white veins, perfect for countertops, flooring, and wall cladding. Durable, low-maintenance, and elegantly versatile for any space.",
        image: River_Black,
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "130",
            current: "125",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "COUNTER_TOPS"]
    },
    // River Brown
    {
        id: 9,
        name: "River Brown",
        description: "A warm blend of brown, gold, cream, and gray tones with flowing veins, perfect for countertops, vanities, flooring, and wall cladding. Durable, low-maintenance, and adds sophistication to any space.",
        image: River_Brown,
        showSizeDetails: true,
        category: {
            color: "Brown",
            demand: 5
        },
        pricing: {
            actual: "140",
            current: "130",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING", "STAIRS"]
    },
    // Tiger Skin
    {
        id: 11,
        name: "Tiger Skin",
        description: "Bold swirls of golden browns, blacks, and grays, perfect for countertops, flooring, and wall cladding. Durable, easy to maintain, and adds an exotic touch to any space.",
        image: Tiger_Red,
        showSizeDetails: true,
        category: {
            color: "Red",
            demand: 3
        },
        pricing: {
            actual: "130",
            current: "115",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "COUNTER_TOPS"]
    },
    // Viscon White
    {
        id: 3,
        name: "Viscon White",
        description: "Elegant white granite with grey, black, and beige veining, perfect for countertops, vanities, and flooring. Durable, low-maintenance, and ideal for modern or traditional interiors.",
        image: Viscon_White,
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 5
        },
        pricing: {
            actual: "160",
            current: "140",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR", "WALL_CLADDING"]
    },
    // Spider Web
    {
        id: 6,
        name: "Spider Web",
        description: "A dramatic stone with bold, web-like veining, perfect for countertops, flooring, and feature walls. Elegant, durable, and ideal for modern or classic interiors.",
        image: Spider_Web,
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "170",
            current: "150",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING"]
    },
    // Teakwood
    {
        id: 7,
        name: "Teak Wood",
        description: "A warm brown stone with wood-like veins, perfect for countertops, flooring, and backsplashes. Durable, low-maintenance, and ideal for rustic or refined interiors.",
        image: Teak_Wood,
        showSizeDetails: true,
        category: {
            color: "Wood",
            demand: 5
        },
        pricing: {
            actual: "145",
            current: "125",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "STAIRS"]
    },
    // Ice Blue
    {
        id: 8,
        name: "Ice Blue",
        description: "A light blue-gray stone with silver, black, and white flecks, perfect for kitchens, countertops, and flooring. Durable, low-maintenance, and offers a sophisticated, refreshing look.",
        image: Ice_Blue,
        showSizeDetails: true,
        category: {
            color: "Blue",
            demand: 3
        },
        pricing: {
            actual: "135",
            current: "120",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["COUNTER_TOPS", "FLOOR"]
    },
    // Rosy Pink
    {
        id: 10,
        name: "Rosy Pink",
        description: "Soft pink hues with white, cream, and gray tones, perfect for countertops, vanities, and flooring. Durable, low-maintenance, and adds a sophisticated touch to any interior.",
        image: Chima_Pink,
        showSizeDetails: true,
        category: {
            color: "Red",
            demand: 4
        },
        pricing: {
            actual: "140",
            current: "120",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "COUNTER_TOPS"]
    },
    // Sadarahalli
    {
        id: 12,
        name: "Sadarahalli",
        description: "Durable, greyish-white granite with wavy black patterns, quarried in Karnataka, India. Ideal for flooring, countertops, and exterior applications due to its strength and aesthetic appeal.",
        image: Sadarahalli,
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 4
        },
        pricing: {
            actual: "130",
            current: "100",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "10*3",
                thickness: "16-20 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "STAIRS", "GARDEN_SPACE", "FOOT_PATH", "MONUMENTS"]
    },
    // Kota Stone
    {
        id: 13,
        name: "Kota Stone",
        description: "Durable, fine-grained limestone in blue and brown shades, quarried in Kota, Rajasthan, India. Known for its toughness and non-slippery nature, it is ideal for flooring, pathways, and outdoor spaces.",
        image: Kota_Stone,
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 5
        },
        pricing: {
            actual: "50",
            current: "40",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "STAIRS", "GARDEN_SPACE", "FOOT_PATH", "MONUMENTS"]
    },
    // Tiles
    // Vitrified Tiles
    {
        id: 14,
        name: "Vitrified Tiles",
        description: "Durable, low-porosity tiles with a glossy or matte finish, made from a mix of clay and silica. Resistant to stains and water, they are ideal for flooring in homes, offices, and commercial spaces.",
        image: Vitrified,
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "STAIRS", "MONUMENTS"]
    },
    // GLOSSY CERAMIC
    {
        id: 15,
        name: "Glossy Ceramic Tiles",
        description: "Durable, high-shine ceramic tiles with a smooth, reflective surface. Ideal for walls and low-traffic floors, offering a sleek and elegant look.",
        image: Glossy_Ceramic,
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "STAIRS", "MONUMENTS"]
    },
    // Matte
    {
        id: 16,
        name: "Matte Finish Tiles",
        description: "A sleek, non-glossy surface with excellent slip resistance, perfect for both indoor and outdoor spaces. Durable and low-maintenance with a modern, elegant look while enhancing safety and comfort.",
        image: Matte,
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 4
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "STAIRS", "MONUMENTS"]
    },
    // Carving
    {
        id: 17,
        name: "Carving Tiles",
        description: "Intricate designs etched into the surface, adding depth and elegance to any space. Perfect for walls, facades, and decorative accents, they combine durability with artistic appeal.",
        image: Carving,
        showSizeDetails: true,
        category: {
            color: "Black",
            demand: 4
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "STAIRS", "MONUMENTS"]
    },
    // Sugar Coated
    {
        id: 18,
        name: "Sugar Coated Tiles",
        description: "Textured, crystal-like surface that adds a subtle sparkle and refined elegance. Durable and slip-resistant, they are perfect for creating stylish and sophisticated interiors.",
        image: Sugar_Coated,
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 4
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "GARDEN_SPACE", "FOOT_PATH", "STAIRS", "MONUMENTS"]
    },
    // Parking / Outdoor
    {
        id: 19,
        name: "Parking / Outdoor Tiles",
        description: "Featuring a strong, anti-slip texture for superior grip and durability. Designed to withstand frequent use and harsh weather. They are perfect for parking, walkways, and open spaces.",
        image: Parking,
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "STAIRS", "MONUMENTS"]
    },
    // Double Charged
    {
        id: 20,
        name: "Double Charged Tiles",
        description: "Double-charged vitrified tiles are durable, low-maintenance tiles with a dual-layer pigment infusion that enhances strength and design longevity. Ideal for high-traffic areas, they offer a polished, premium look with superior resistance to stains and wear.",
        image: Double_Charged,
        showSizeDetails: true,
        category: {
            color: "White",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["FLOOR", "WALL_CLADDING", "STAIRS", "MONUMENTS"]
    },
    // Wall Cladding
    {
        id: 20,
        name: "Wall Cladding",
        description: "Durable, decorative covering for walls, available in natural stone, wood, or ceramic materials. Enhances aesthetics while providing protection against weather and wear.",
        image: Wall_Cladding,
        showSizeDetails: true,
        category: {
            color: "Multi Coloured",
            demand: 5
        },
        pricing: {
            actual: "",
            current: "",
            description: "sq.ft."
        },
        mesurement: [
            {
                type: "Slab",
                scale: "2*2",
                thickness: "20-25 MM",
                description: ""
            },
            {
                type: "Slab",
                scale: "2*4",
                thickness: "20-25 MM",
                description: ""
            },
        ],
        usage: ["WALL_CLADDING"]
    },
    // Fencing Stone
    {
        id: 21,
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
            description: "Stone"
        },
        mesurement: [
            {
                type: "Pole",
                scale: "5.5 ft",
                thickness: "4 inch",
                description: ""
            },
        ],
        usage: ["GARDEN_SPACE", "FENCING"]
    },
    // Unpolished Slab (Raw)
    {
        id: 22,
        name: "Unpolished Slab (Raw)",
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
            description: "sq.ft."
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
        id: 23,
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
            description: "Block"
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
        id: 24,
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
            description: "sq.ft."
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
]

export default productsList