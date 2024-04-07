const sampleListings = [
  {
    title: "Women's Floral Dress",
    description:
      "Step into spring with this elegant floral dress. Featuring a flattering fit and vibrant floral print, it's perfect for special occasions.",
    image: {
      filename: "floral-dress",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 49.99,
  },
  {
    title: "Men's Leather Wallet",
    description:
      "Keep your essentials organized with this sleek leather wallet. With multiple card slots and a bill compartment, it's both practical and stylish.",
    image: {
      filename: "leather-wallet",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 39.99,
  },
  {
    title: "Women's Running Shoes",
    description:
      "Achieve your fitness goals in style with these lightweight running shoes. Designed for comfort and performance, they'll keep you going mile after mile.",
    image: {
      filename: "running-shoes",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 59.99,
  },
  {
    title: "Men's Slim Fit Jeans",
    description:
      "Update your denim collection with these modern slim fit jeans. Made from stretchy denim for a comfortable fit, they're a versatile addition to any wardrobe.",
    image: {
      filename: "slim-fit-jeans",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 34.99,
  },
  {
    title: "Women's Tote Bag",
    description:
      "Carry your essentials in style with this chic tote bag. With a spacious interior and durable construction, it's perfect for work or weekend outings.",
    image: {
      filename: "tote-bag",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 44.99,
  },
  {
    title: "Men's Polo Shirt",
    description:
      "Stay cool and stylish in this classic men's polo shirt. Made from breathable fabric, it's ideal for casual wear or outdoor activities.",
    image: {
      filename: "polo-shirt",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 24.99,
  },
  {
    title: "Women's Sunglasses",
    description:
      "Complete your look with these trendy sunglasses. Featuring UV protection and a stylish design, they're a must-have accessory for sunny days.",
    image: {
      filename: "sunglasses",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 19.99,
  },
  {
    title: "Men's Casual Sneakers",
    description:
      "Add a sporty touch to your outfits with these comfortable casual sneakers. With a modern design and cushioned sole, they're perfect for everyday wear.",
    image: {
      filename: "casual-sneakers",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 49.99,
  },
  {
    title: "Women's Crossbody Bag",
    description:
      "Stay organized on the go with this versatile crossbody bag. Featuring multiple compartments and an adjustable strap, it's both stylish and functional.",
    image: {
      filename: "crossbody-bag",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 39.99,
  },
  {
    title: "Men's Dress Shoes",
    description:
      "Elevate your formal attire with these sleek dress shoes. Crafted from premium leather, they're perfect for weddings, parties, or business meetings.",
    image: {
      filename: "dress-shoes",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 69.99,
  },
  {
    title: "Women's Denim Jacket",
    description:
      "Stay stylish and comfortable with this classic denim jacket. Featuring a timeless design and durable denim fabric, it's perfect for layering.",
    image: {
      filename: "denim-jacket",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 54.99,
  },
  {
    title: "Men's Backpack",
    description:
      "Carry your essentials in style with this spacious backpack. With multiple compartments and padded straps, it's perfect for work, school, or travel.",
    image: {
      filename: "backpack",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 49.99,
  },
  {
    title: "Women's Workout Leggings",
    description:
      "Stay comfortable during workouts with these stretchy workout leggings. Featuring moisture-wicking fabric and a high waistband, they provide support and style.",
    image: {
      filename: "workout-leggings",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 29.99,
  },
  {
    title: "Men's Hooded Sweatshirt",
    description:
      "Stay cozy and warm with this soft hooded sweatshirt. Made from fleece fabric with a kangaroo pocket, it's perfect for chilly days.",
    image: {
      filename: "hooded-sweatshirt",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 39.99,
  },
  {
    title: "Women's Ankle Boots",
    description:
      "Step out in style with these trendy ankle boots. Featuring a block heel and faux leather material, they're perfect for day-to-night looks.",
    image: {
      filename: "ankle-boots",
      url: "https://lh3.googleusercontent.com/gg/ANIJZFFhu5BN2gTnmK5b1CnrBYehPfSBrn884UpPbiOzFpLrM0BoDgB4rWjetmesUgCBim97MgdQP9ZKM2-IJ9TjbxiR19ql7_sM0Vh_M890tc-ThEcJgraZXy5RBXN60lihUacN3uqfajdsWYgCY_XGuJtXZP-vQw3ws8TlpqBFMTIEH1SsJ-ofP2fSfnQS7N8mI49UnAKMICvzfGSwm0uChX4Eo05qDiONkzF8FQLKKuvuoxafm0Wr6E7xTuqt9ijRdsRp_THeT8bOj2_aU3OtudTIazUPi2t1oR-xlo80b2a7pttAoB6vr_IwtMChLZ9Cc5nSCF3TpiIpFAO21nFYOmSz",
    },
    price: 59.99,
  },
];

module.exports = { data: sampleListings };
