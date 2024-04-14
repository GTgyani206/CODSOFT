const sampleListings = [
  {
    title: "Women's Floral Dress",
    description:
      "Step into spring with this elegant floral dress. Featuring a flattering fit and vibrant floral print, it's perfect for special occasions.",
    image: {
      filename: "floral-dress",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 449.99,
  },
  {
    title: "Men's Leather Wallet",
    description:
      "Keep your essentials organized with this sleek leather wallet. With multiple card slots and a bill compartment, it's both practical and stylish.",
    image: {
      filename: "leather-wallet",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 339.99,
  },
  {
    title: "Women's Running Shoes",
    description:
      "Achieve your fitness goals in style with these lightweight running shoes. Designed for comfort and performance, they'll keep you going mile after mile.",
    image: {
      filename: "running-shoes",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 559.99,
  },
  {
    title: "Men's Slim Fit Jeans",
    description:
      "Update your denim collection with these modern slim fit jeans. Made from stretchy denim for a comfortable fit, they're a versatile addition to any wardrobe.",
    image: {
      filename: "slim-fit-jeans",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 534.99,
  },
  {
    title: "Women's Tote Bag",
    description:
      "Carry your essentials in style with this chic tote bag. With a spacious interior and durable construction, it's perfect for work or weekend outings.",
    image: {
      filename: "tote-bag",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 549.99,
  },
  {
    title: "Men's Polo Shirt",
    description:
      "Stay cool and stylish in this classic men's polo shirt. Made from breathable fabric, it's ideal for casual wear or outdoor activities.",
    image: {
      filename: "polo-shirt",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 524.99,
  },
  {
    title: "Women's Sunglasses",
    description:
      "Complete your look with these trendy sunglasses. Featuring UV protection and a stylish design, they're a must-have accessory for sunny days.",
    image: {
      filename: "sunglasses",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 719.99,
  },
  {
    title: "Men's Casual Sneakers",
    description:
      "Add a sporty touch to your outfits with these comfortable casual sneakers. With a modern design and cushioned sole, they're perfect for everyday wear.",
    image: {
      filename: "casual-sneakers",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 449.99,
  },
  {
    title: "Women's Crossbody Bag",
    description:
      "Stay organized on the go with this versatile crossbody bag. Featuring multiple compartments and an adjustable strap, it's both stylish and functional.",
    image: {
      filename: "crossbody-bag",
      url: "htpst://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 339.99,
  },
  {
    title: "Men's Dress Shoes",
    description:
      "Elevate your formal attire with these sleek dress shoes. Crafted from premium leather, they're perfect for weddings, parties, or business meetings.",
    image: {
      filename: "dress-shoes",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 769.99,
  },
  {
    title: "Women's Denim Jacket",
    description:
      "Stay stylish and comfortable with this classic denim jacket. Featuring a timeless design and durable denim fabric, it's perfect for layering.",
    image: {
      filename: "denim-jacket",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 454.99,
  },
  {
    title: "Men's Backpack",
    description:
      "Carry your essentials in style with this spacious backpack. With multiple compartments and padded straps, it's perfect for work, school, or travel.",
    image: {
      filename: "backpack",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 449.99,
  },
  {
    title: "Women's Workout Leggings",
    description:
      "Stay comfortable during workouts with these stretchy workout leggings. Featuring moisture-wicking fabric and a high waistband, they provide support and style.",
    image: {
      filename: "workout-leggings",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 329.99,
  },
  {
    title: "Men's Hooded Sweatshirt",
    description:
      "Stay cozy and warm with this soft hooded sweatshirt. Made from fleece fabric with a kangaroo pocket, it's perfect for chilly days.",
    image: {
      filename: "hooded-sweatshirt",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 439.99,
  },
  {
    title: "Women's Ankle Boots",
    description:
      "Step out in style with these trendy ankle boots. Featuring a block heel and faux leather material, they're perfect for day-to-night looks.",
    image: {
      filename: "ankle-boots",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 559.99,
  },
];

const Ladies = [
  {
    title: "Floral Print Maxi Dress",
    description:
      "Embrace summer vibes with this stunning floral print maxi dress. Made from lightweight fabric, it's perfect for beach outings or brunch dates.",
    image: {
      filename: "floral-maxi-dress",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 49.99,
  },
  {
    title: "Embroidered Denim Jacket",
    description:
      "Elevate your denim game with this embroidered denim jacket. Featuring intricate floral embroidery, it adds a stylish touch to any outfit.",
    image: {
      filename: "embroidered-denim-jacket",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 59.99,
  },
  {
    title: "Striped Linen Jumpsuit",
    description:
      "Stay chic and comfortable in this striped linen jumpsuit. With a relaxed fit and adjustable waist tie, it's a versatile piece for any occasion.",
    image: {
      filename: "striped-linen-jumpsuit",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 39.99,
  },
  {
    title: "Boho Crochet Blouse",
    description:
      "Channel boho vibes with this crochet blouse. Pair it with denim shorts or jeans for a casual yet stylish look.",
    image: {
      filename: "boho-crochet-blouse",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 34.99,
  },
  {
    title: "Ruffled Off-Shoulder Top",
    description:
      "Make a statement with this ruffled off-shoulder top. Its playful design adds a touch of flair to your summer wardrobe.",
    image: {
      filename: "ruffled-off-shoulder-top",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 29.99,
  },
];
const Men = [
  {
    title: "Linen Button-Up Shirt",
    description:
      "Stay cool and sophisticated in this linen button-up shirt. Perfect for summer days or casual Fridays at the office.",
    image: {
      filename: "linen-button-up-shirt",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 44.99,
  },
  {
    title: "Printed Swim Trunks",
    description:
      "Dive into summer with these vibrant printed swim trunks. Quick-drying fabric and a comfortable fit make them ideal for beach days.",
    image: {
      filename: "printed-swim-trunks",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 24.99,
  },
  {
    title: "Slim Fit Chino Pants",
    description:
      "Update your wardrobe with these versatile slim fit chino pants. Dress them up with a blazer or keep it casual with a polo shirt.",
    image: {
      filename: "slim-fit-chino-pants",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 54.99,
  },
  {
    title: "Graphic Print T-Shirt",
    description:
      "Add a pop of personality to your look with this graphic print t-shirt. Soft and breathable fabric ensures all-day comfort.",
    image: {
      filename: "graphic-print-t-shirt",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 19.99,
  },
  {
    title: "Casual Sneakers",
    description:
      "Step out in style with these classic casual sneakers. Their timeless design makes them a wardrobe staple for any season.",
    image: {
      filename: "casual-sneakers",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 39.99,
  },
];
const Kid = [
  {
    title: "Unicorn Print Dress",
    description:
      "Spark your little one's imagination with this adorable unicorn print dress. It's perfect for playdates or special occasions.",
    image: {
      filename: "unicorn-print-dress",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 29.99,
  },
  {
    title: "Dinosaur Graphic T-Shirt",
    description:
      "Let your kid's personality shine with this dinosaur graphic t-shirt. Soft fabric ensures comfort during playtime.",
    image: {
      filename: "dinosaur-graphic-t-shirt",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 14.99,
  },
  {
    title: "Denim Overalls",
    description:
      "Keep it cute and casual with these denim overalls for kids. Adjustable straps ensure a perfect fit as they grow.",
    image: {
      filename: "denim-overalls",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 34.99,
  },
  {
    title: "Printed Leggings Set",
    description:
      "Update their activewear collection with this printed leggings set. Comfortable and stylish for everyday wear or sports activities.",
    image: {
      filename: "printed-leggings-set",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 19.99,
  },
  {
    title: "Cartoon Character Backpack",
    description:
      "Make school days fun with this cartoon character backpack. Spacious compartments and adjustable straps make it practical and playful.",
    image: {
      filename: "cartoon-character-backpack",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 24.99,
  },
];
const Home = [
  {
    title: "Velvet Throw Pillow Set",
    description:
      "Add a touch of luxury to your living space with this velvet throw pillow set. Mix and match colors for a personalized look.",
    image: {
      filename: "velvet-throw-pillow-set",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 39.99,
  },
  {
    title: "Ceramic Plant Pot",
    description:
      "Elevate your indoor garden with this stylish ceramic plant pot. Its sleek design complements any plant arrangement.",
    image: {
      filename: "ceramic-plant-pot",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 19.99,
  },
  {
    title: "Aromatherapy Diffuser",
    description:
      "Create a relaxing atmosphere at home with this aromatherapy diffuser. Choose your favorite essential oils for a customized experience.",
    image: {
      filename: "aromatherapy-diffuser",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 29.99,
  },
  {
    title: "Moroccan Style Rug",
    description:
      "Bring warmth and elegance to your floors with this Moroccan style rug. Its intricate patterns add a touch of global charm to your home.",
    image: {
      filename: "moroccan-style-rug",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 79.99,
  },
  {
    title: "Stainless Steel Cookware Set",
    description:
      "Upgrade your kitchen with this durable stainless steel cookware set. Includes essential pots and pans for all your cooking needs.",
    image: {
      filename: "stainless-steel-cookware-set",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEp83bDbD3lI3Gp8RnAACu72grd9n6MMw69A&s",
    },
    price: 149.99,
  },
];

module.exports = { data: sampleListings };
module.exports = { data: Ladies };
module.exports = { data: Men };
module.exports = { data: Kid };
module.exports = { data: Home };
