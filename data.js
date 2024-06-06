const results = [
    {
        name: 'Decadent Desserts',
        image: 'd1.png',
        link: 'dd1.html'
    },
    {
        name: 'Sweet Celebrations',
        image: 'wc.png',
        link: 'sc.html'
    },
    {
        name: 'Guilt-Free Goodies',
        image: 'bl.png',
        link: 'gg.html'
    },
    {
        name: 'Cupcake Craze',
        image: 'kiwi-cupcakes-3-scaled.jpeg',
        link: 'cupcakes.html'
    },
    {
        name: 'Cookie Cravings',
        image: 'cookies.jpeg',
        link: 'dd1.html'
    },
    {
        name: 'Custom Creations',
        image: '21.jpeg',
        link: 'sc.html'
    },
    {
        name: 'Red Velvet',
        image: 'redvel.jpeg',
        link: 'dd1.html#red-velvet' // Updated link with identifier
    },
    // Add more search result objects as needed
    {
        name: 'Chocolate Truffle Cake',
        image: 'cc.jpeg',
        link: 'dd1.html#chocolate-truffle-cake',
        id: 'chocolate-truffle-cake'
    },
    {
        name: 'Pancakes',
        image: 'pan.jpeg',
        link: 'dd1.html#pancakes',
        id: 'pancakes'
    },
    {
        name: 'Raspberry Pudding',
        image: 'https://i.pinimg.com/564x/c2/a1/d6/c2a1d6199f88157832d405b91000c11e.jpg',
        link: 'dd1.html#raspberry-pudding',
        id: 'raspberry-pudding'
    },
    {
        name: 'Orange Swiss roll',
        image: 'https://i.pinimg.com/564x/73/7e/f9/737ef946f266982ad1aab78805f8b521.jpg',
        link: 'dd1.html#orange-swiss-roll',
        id: 'orange-swiss-roll'
    },
    {
        name: 'Chocolate Brownie',
        image: 'https://content.quizzclub.com/interesting-fact/2020-08/20-perfect-pictures-of-desserts-that-will-make-your-mouth-water-1.jpg',
        link: 'dd1.html#chocolate-brownie',
        id: 'chocolate-brownie'
    },
    {
        name: 'Custard Eclairs',
        image: 'cream.png',
        link: 'dd1.html#custard-eclairs',
        id: 'custard-eclairs'
    },
    {
        name: 'Dora Cakes',
        image: 'https://hamariweb.com/recipes/images/recipeimages/71091.jpg',
        link: 'dd1.html#dora-cakes',
        id: 'dora-cakes'
    },
    {
        name: 'Pistachio Fluffy',
        image: 'pis.jpeg',
        link: 'dd1.html#pistachio-fluffy',
        id: 'pistachio-fluffy'
    },
    {
        name: 'Wedding Cake',
        image: 'https://i.pinimg.com/564x/ac/1d/55/ac1d55b2dde5cfa1a2077ebc834422be.jpg',
        link: 'sc.html#wedding-cake',
        id: 'wedding-cake'
    },
    {
        name: 'Birthday Cake',
        image: 'https://i.pinimg.com/474x/2d/d7/bf/2dd7bfd369176287dd945300ced89915.jpg',
        link: 'sc.html#birthday-cake',
        id: 'birthday-cake'
    },
    {
        name: 'Anniversary Cake',
        image: 'https://i.pinimg.com/564x/a7/66/58/a7665882b0dbfff3d8347bc15220eb42.jpg',
        link: 'sc.html#anniversary-cake',
        id: 'anniversary-cake'
    },
    {
        name: 'Graduation Celebration',
        image: 'https://i.pinimg.com/564x/69/06/a2/6906a28844480ef28c98bf3adea08c4e.jpg',
        link: 'sc.html#graduation-celebration',
        id: 'graduation-celebration'
    },
    {
        name: 'Friendship Fever',
        image: 'https://bakenshake.in/web_components/images/product_images/477_sml.jpg',
        link: 'sc.html#ff',
        id: 'ff'
    },
    {
        name: 'Custom Pastries',
        image: 'https://i.pinimg.com/564x/1f/90/fe/1f90fe4faad19261c2c67dab5d4059de.jpg',
        link: 'sc.html#custom-pastries',
        id: 'custom-pastries'
    },
    {
        name: 'Celebration Cake',
        image: 'https://i.pinimg.com/564x/a6/75/7b/a6757b8b2b4e970184cb4ea1d101d5ef.jpg',
        link: 'sc.html#celebration-cake',
        id: 'celebration-cake'
    },
    {
        name: 'Siblings\' Special',
        image: 'sis.jpeg',
        link: 'sc.html#siblings-special',
        id: 'siblings-special'
    },
    {
        name: 'Event Pastries',
        image: 'cyl 3.jpeg',
        link: 'sc.html#event-pastries',
        id: 'event-pastries'
    },
    {
        name: 'Gluten-Free Brownies',
        image: 'https://i.pinimg.com/564x/8d/29/98/8d29981eb501880d1cdbd1fe17301f1a.jpg',
        link: 'gg.html#gluten-free-brownies',
        id: 'gluten-free-brownies'
    },
    {
        name: 'Organic Fruit Bars',
        image: 'https://i.pinimg.com/564x/53/90/91/539091b63bf413e89e6e8071730130b2.jpg',
        link: 'gg.html#organic-fruit-bars',
        id: 'organic-fruit-bars'
    },
    {
        name: 'Egg-Free Cupcakes',
        image: 'ck.jpeg',
        link: 'gg.html#egg-free-cupcakes',
        id: 'egg-free-cupcakes'
    },
    {
        name: 'Sugar-Free Cookies',
        image: 'https://i.pinimg.com/564x/a3/69/cf/a369cf6cbe372349942ccbfa9d5ea2c5.jpg',
        link: 'gg.html#sugar-free-cookies',
        id: 'sugar-free-cookies'
    },
    {
        name: 'Low-Sugar Granola Bars',
        image: 'https://i.pinimg.com/564x/3a/fc/89/3afc89707ba72928cf8daf249037f032.jpg',
        link: 'gg.html#low-sugar-granola-bars',
        id: 'low-sugar-granola-bars'
    },
    {
        name: 'Dairy-Free Ice Cream',
        image: 'https://rumkisgoldenspoon.com/wp-content/uploads/2022/05/Gulkand-icecream.jpg',
        link: 'gg.html#dairy-free-ice-cream',
        id: 'dairy-free-ice-cream'
    },
    {
        name: 'Choco Dipped Oranges',
        image: 'https://i.pinimg.com/564x/19/62/92/1962923285da80b0f2cc89762c0498eb.jpg',
        link: 'gg.html#choco-dipped-oranges',
        id: 'choco-dipped-oranges'
    },
    {
        name: 'Vegan Cheesecake',
        image: 'https://i.pinimg.com/564x/30/00/66/30006631d08d2375edd55ed3b8bd5c15.jpg',
        link: 'gg.html#vegan-cheesecake',
        id: 'vegan-cheesecake'
    },
    {
        name: 'Fat-Free Muffins',
        image: 'https://i.pinimg.com/564x/7d/81/e5/7d81e5e848d351302ccf09ca3f652048.jpg',
        link: 'gg.html#fat-free-muffins',
        id: 'fat-free-muffins'
    }

        
    
];