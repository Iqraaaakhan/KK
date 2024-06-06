document.addEventListener('DOMContentLoaded', function () {
    const searchResults = document.getElementById('searchResults');
    let results = []; // Declare results globally

    // Add click event listener to search results to navigate to the respective product page
    searchResults.addEventListener('click', function (event) {
        const targetItem = event.target.closest('.search-result-item');
        if (targetItem) {
            const link = targetItem.querySelector('a').getAttribute('href');
            window.location.href = link;
        }
    });

    // Update search results when performing a search
    function performSearch() {
        const query = document.querySelector('.search-bar input').value.toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        if (query.trim() === '') {
            searchResults.style.display = 'none';
            return;
        }

        results = [
            // Your product data here...
            {
                name: 'Chocolate Truffle Cake',
                image: 'cc.jpeg',
                link: 'dd1.html#chocolate-truffle-cake',
                id: 'chocolate-truffle-cake',
                price:'500',
                dataId: 'chocolate-truffle-cake',
                dataprice:'500',
                dataimage:'cc.jpeg'
            },
            {
                name: 'Pancakes',
                image: 'pan.jpeg',
                link: 'dd1.html#pancakes',
                id: 'pancakes',
                dataId: 'pancakes'
            },
            // Add more products here
            {
                name: 'Raspberry Pudding',
                image: 'https://i.pinimg.com/564x/c2/a1/d6/c2a1d6199f88157832d405b91000c11e.jpg',
                link: 'dd1.html#raspberry-pudding',
                id: 'raspberry-pudding',
                dataId: 'raspberry-pudding'
            },
            {
                name: 'Orange Swiss roll',
                image: 'https://i.pinimg.com/564x/73/7e/f9/737ef946f266982ad1aab78805f8b521.jpg',
                link: 'dd1.html#orange-swiss-roll',
                id: 'orange-swiss-roll',
                dataId: 'orange-swiss-roll'
            },
            {
                name: 'Chocolate Brownie',
                image: 'https://content.quizzclub.com/interesting-fact/2020-08/20-perfect-pictures-of-desserts-that-will-make-your-mouth-water-1.jpg',
                link: 'dd1.html#chocolate-brownie',
                id: 'chocolate-brownie',
                dataId: 'chocolate-brownie'
            },
            {
                name: 'Custard Eclairs',
                image: 'cream.png',
                link: 'dd1.html#custard-eclairs',
                id: 'custard-eclairs',
                dataId: 'custard-eclairs'
            },
            {
                name: 'Dora Cakes',
                image: 'https://hamariweb.com/recipes/images/recipeimages/71091.jpg',
                link: 'dd1.html#dora-cakes',
                id: 'dora-cakes',
                dataId: 'dora-cakes'
            },
            {
                name: 'Pistachio Fluffy',
                image: 'pis.jpeg',
                link: 'dd1.html#pistachio-fluffy',
                id: 'pistachio-fluffy',
                dataId: 'pistachio-fluffy'
            },
            {
                name: 'Red Velvet',
                image: 'redvel.jpeg',
                link: 'dd1.html#red-velvet',
                id: 'red-velvet',
                dataId: 'red-velvet'
            },//sc
            {
                name: 'Wedding Cake',
                image: 'https://i.pinimg.com/564x/ac/1d/55/ac1d55b2dde5cfa1a2077ebc834422be.jpg',
                link: 'sc.html#wedding-cake',
                id: 'wedding-cake',

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
            },//gg
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
            },
        //cupcakes
        {
            name: 'Vanilla Cupcake',
                image: 'https://i.pinimg.com/564x/fb/15/56/fb155655f46883bc292b343ab3a39dd7.jpg',
                link: 'cupcakes.html#vanilla-cupcake',
                id: 'vanilla-cupcake'
        },
        {
            name: 'Choco-Cappuccino Muffins',
            image: 'cap.jpeg',
            link: 'cupcakes.html#choco-cappuccino-muffins',
            id: 'choco-cappuccino-muffins'
        },
        {
            name: 'Strawberry Cupcake',
            image: 'pink.jpeg',
            link: 'cupcakes.html#strawberry-cupcake',
            id: 'strawberry-cupcake'
        },
        {
            name: 'Red Velvet Cupcake',
            image: 'redcc.jpeg',
            link: 'cupcakes.html#red-velvet-cupcake',
            id: 'red-velvet-cupcake'
        },
        {
            name: 'Blueberry Cupcake',
            image: 'blueberrycc.jpeg',
            link: 'cupcakes.html#blueberry-cupcake',
            id: 'blueberry-cupcake'
        },
        {
            name: 'Caramel Cupcake',
            image: 'saltcar.jpeg',
            link: 'cupcakes.html#caramel-cupcake',
            id: 'caramel-cupcake'
        },
        {
            name: 'Caramel Apple Cupcake',
            image: 'https://greedyeats.com/wp-content/uploads/2020/09/Caramel-Apple-Cupcakes.jpg',
            link: 'cupcakes.html#caramel-apple-cupcake',
            id: 'caramel-apple-cupcake'
        },
        {
            name: 'Mint Chocolate Cupcake',
            image: 'https://i.pinimg.com/564x/75/9c/c0/759cc0080fc28f93640475fd88150ed4.jpg',
            link: 'cupcakes.html#mint-chocolate-cupcake',
            id: 'mint-chocolate-cupcake'
        },
        {
            name: 'Pistachio Cupcake',
            image: 'https://i.pinimg.com/564x/53/c7/4d/53c74d24518cef62c3919564050ccd6b.jpg',
            link: 'cupcakes.html#pistachio-cupcake',
            id: 'pistachio-cupcake'
        },
        // Product Item 1 - Macadamia Nut Cookie
{
    name: 'Macadamia Nut Cookie',
    image: 'https://i.pinimg.com/564x/4d/ec/7d/4dec7de6860441c337d6a2613bb1ba32.jpg',
    link: 'cookies.html#macadamia-nut-cookie',
    id: 'macadamia-nut-cookie'
},

// Product Item 2 - Snickerdoodle Cookie
{
    name: 'Snickerdoodle Cookie',
    image: 'https://www.modernhoney.com/wp-content/uploads/2019/12/Caramel-Filled-Snickerdoodles-2-edit-1200x745.jpg',
    link: 'cookies.html#snickerdoodle-cookie',
    id: 'snickerdoodle-cookie'
},

// Product Item 3 - Double Chocolate Cookie
{
    name: 'Double Chocolate Cookie',
    image: 'https://i.pinimg.com/564x/9c/e0/ae/9ce0aeaa5ecbc0d344f4e851967ea687.jpg',
    link: 'cookies.html#double-chocolate-cookie',
    id: 'double-chocolate-cookie'
},

// Product Item 4 - Chocolate Chip Cookie
{
    name: 'Chocolate Chip Cookie',
    image: 'https://i.pinimg.com/564x/20/e7/dc/20e7dc4ee90edb78feb088f4ab0470a1.jpg',
    link: 'cookies.html#chocolate-chip-cookie',
    id: 'chocolate-chip-cookie'
},

// Product Item 5 - Black Forest Brownie Cookie
{
    name: 'Black Forest Brownie Cookie',
    image: 'https://i.pinimg.com/564x/e5/d9/18/e5d91830530e752baa69e3254f8312d2.jpg',
    link: 'cookies.html#Black-Forest-Brownie-Cookie',
    id: 'Black-Forest-Brownie-Cookie'
},

// Product Item 6 - Lemon Cookie
{
    name: 'Lemon Cookie',
    image: 'https://flouringkitchen.com/wp-content/uploads/2023/04/BW1A2358.jpg',
    link: 'cookies.html#lemon-cookie',
    id: 'lemon-cookie'
},

// Product Item 7 - Sugar Cookie
{
    name: 'Sugar Cookie',
    image: 'https://i.pinimg.com/564x/97/0f/43/970f4384898ac7987fd9a6efa6909d8c.jpg',
    link: 'cookies.html#sugar-cookie',
    id: 'sugar-cookie'
},

// Product Item 8 - Peanut Butter Cookie
{
    name: 'Peanut Butter Cookie',
    image: 'https://i.pinimg.com/564x/37/a4/df/37a4df0d936813e3717a40a50380db7d.jpg',
    link: 'cookies.html#peanut-butter-cookie',
    id: 'peanut-butter-cookie'
},

// Product Item 9 - Oatmeal Raisin Cookie
{
    name: 'Oatmeal Raisin Cookie',
    image: 'oc.jpeg',
    link: 'cookies.html#oatmeal-raisin-cookie',
    id: 'oatmeal-raisin-cookie'
},
// Product Item 1: Checkmate Cake
{
    name: 'Checkmate Cake',
    image: 'https://i.pinimg.com/564x/89/bc/1c/89bc1ccdb5be27408af69c1ab75b9ba1.jpg',
    link: 'Custom.html#checkmate-cake',
    id: 'checkmate-cake'
},

// Product Item 2: Cricket Fever Cupcake
{
    name: 'Cricket Fever Cupcakes',
    image: 'https://i.pinimg.com/564x/6f/0f/6a/6f0f6a785f5b595fb8296824c6c089c0.jpg',
    link: 'Custom.html#cricket-fever-cupcake',
    id: 'cricket-fever-cupcake'
},

// Product Item 3: Bibliophile Bites
{
    name: 'Bibliophile Bites',
    image: 'https://i.pinimg.com/564x/6e/34/d0/6e34d0d759e35f102f4b79cb7ff1dfee.jpg',
    link: 'Custom.html#bibliophile-bites',
    id: 'bibliophile-bites'
},

// Product Item 4: Hala Madrid
{
    name: 'Hala Madrid',
    image: 'mfc.jpeg',
    link: 'Custom.html#hala-madrid',
    id: 'hala-madrid'
},

// Product Item 5: Badminton Ace Cake
{
    name: 'Badminton Ace Cake',
    image: 'bad.jpeg',
    link: 'Custom.html#badminton-ace-cake',
    id: 'badminton-ace-cake'
},

// Product Item 6: Gym Buff Cake
{
    name: 'Gym Buff Cake',
    image: 'gym.jpeg',
    link: 'Custom.html#gym-buff-cake',
    id: 'gym-buff-cake'
},

// Product Item 7: Wanderlust Cake
{
    name: 'Wanderlust Cake',
    image: 'trav.jpeg',
    link: 'Custom.html#wanderlust-cake',
    id: 'wanderlust-cake'
},

// Product Item 8: Coding Cookies
{
    name: 'Coding Cookies',
    image: 'pycookie.jpeg',
    link: 'Custom.html#coding-cookies',
    id: 'coding-cookies'
},

// Product Item 9: Tea Time Treats
{
    name: 'Tea Time Treats',
    image: 'tea.jpeg',
    link: 'Custom.html#tea-time-treats',
    id: 'tea-time-treats'
}
    ];

        const filteredResults = results.filter(item =>
            item.name.toLowerCase().includes(query)
        );

        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const item = document.createElement('div');
                item.classList.add('search-result-item');
                item.innerHTML = `
                    <img src="${result.image}" alt="${result.name}">
                    <a href="${result.link}">${result.name}</a>
                `;
                searchResults.appendChild(item);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }

    // Trigger search when typing in the search input
    document.querySelector('.search-bar input').addEventListener('input', performSearch);
});
