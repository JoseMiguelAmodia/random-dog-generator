document.getElementById('get-dog-btn').addEventListener('click', getRandomDog);

function getRandomDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const dogImage = data.message;
            document.getElementById('dog-image').src = dogImage;
        })
        .catch(error => {
            console.error('Error fetching random dog:', error);
        });
}