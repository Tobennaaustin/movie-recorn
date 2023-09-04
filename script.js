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
const button = document.querySelector("button");

button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        // Get latitude & longitude from position object
        const { latitude, longitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.table(data.address);
            })
            .catch(() => {
                console.log("Error fetching data from API");
            });
    });
});
