// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch data from Firestore
async function fetchDataFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "1")); // Assuming "1" is the collection name
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

// Function to display data in the HTML document
const displayData = (data) => {
  const dataDisplay = document.getElementById("dataDisplay");
  // Clear previous data
  dataDisplay.innerHTML = "";
  // Append each data item to the container
  data.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <div>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <p>Price: ${item.price}</p>
        <img src="${item.imageUrl}" alt="${item.title}">
      </div>
    `;
    dataDisplay.appendChild(itemElement);
  });
};

// Call the function to fetch data and display it
fetchDataFromFirestore().then((data) => {
  displayData(data);
});

