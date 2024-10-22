function toggleMenu() {
    const menu = document.getElementById("vertical-bar");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to open the modal
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex'; // Show the modal as a flex container
    modalImg.src = imageSrc; // Set the modal image to the clicked image
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide the modal
}
