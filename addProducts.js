// Import the Firebase SDK
const firebase = require('firebase/app');
require('firebase/firestore');

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdpzVlA0EpIQcl0dY4u0O8Qu690Yz5Rk",
  authDomain: "kitchen-konnections-iqra.firebaseapp.com",
  databaseURL: "https://kitchen-konnections-iqra-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kitchen-konnections-iqra",
  storageBucket: "kitchen-konnections-iqra.appspot.com",
  messagingSenderId: "504936969546",
  appId: "1:504936969546:web:514a861339bc803de3bdb3",
  measurementId: "G-YMS70Q576L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = firebase.firestore();

// List of products to add 
const products = [
  {
    imageUrl: "https://example.com/images/mango_cake.jpg",
    price: "Rs.350",
    sellerId: "Home Sweets",
    title: "Mango Cake"
  },
  {
    imageUrl: "https://i.pinimg.com/236x/e2/55/b1/e255b1231a3d70dc6fffe005151fd33a.jpg",
    price: "Rs.400",
    sellerId: "Bakery Bliss",
    title: "Strawberry Cake"
  },
  {
    imageUrl: "https://example.com/images/vanilla_cake.jpg",
    price: "Rs.250",
    sellerId: "Sweet Delights",
    title: "Vanilla Cake"
  },
  {
    imageUrl: "1.png",
    price: "Rs.450",
    sellerId: "Blueberry Treats",
    title: "Blueberry Cake"
  }
];

// Function to add products to the collection
async function addProducts() {
  for (const product of products) {
    try {
      await db.collection('1').add(product);
      console.log(`Product "${product.title}" added successfully.`);
    } catch (error) {
      console.error(`Error adding product "${product.title}":`, error);
    }
  }
}

// Call the addProducts function to start adding products
addProducts();
