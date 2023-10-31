document.addEventListener("DOMContentLoaded", () => {
    const dogImage = document.querySelector(".dog-image");
    const getRandomDogButton = document.getElementById("getRandomDog");

    // Function to fetch a random dog image
    function fetchRandomDogImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                const imageUrl = data.message;
                dogImage.innerHTML = `<img src="${imageUrl}" alt="Random Dog" class="img-fluid">`;
            })
            .catch((error) => {
                console.error("Error fetching dog image:", error);
            });
    }

    // Event listener for the "Get Random Dog" button
    getRandomDogButton.addEventListener("click", fetchRandomDogImage);

    // Initial load of a random dog image
    fetchRandomDogImage();
});
