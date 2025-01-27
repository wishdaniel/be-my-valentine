// Handle Yes click
function yesClick() {
    document.body.innerHTML = `
        <div class="container">
            <img src="https://i.postimg.cc/nsSxMvCk/love.jpg" alt="Love Photo" class="image">
            <div class="title" style="font-size: 1.8rem;">Yayyyy!!!<br>I love you so much babyy❤️</div>
        </div>
    `;
}

// Handle No click
function noClick() {
    const image = document.getElementById('mainImage');
    const message = document.getElementById('message');
    const okButton = document.getElementById('okButton');

    image.src = "https://i.postimg.cc/pmZRMNv3/crying.jpg"; // Crying Photo
    message.innerHTML = "Plsssssssss";
    message.style.display = "block";

    const buttons = document.querySelector('.buttons');
    buttons.style.display = "none";

    okButton.style.display = "inline-block";
}

// Handle final Yes click
function finalYes() {
    yesClick();
}