// Function to toggle the vertical menu
function toggleMenu() {
    const verticalBar = document.getElementById('vertical-bar');
    if (verticalBar.style.display === 'block') {
        verticalBar.style.display = 'none'; // Hide the menu
    } else {
        verticalBar.style.display = 'block'; // Show the menu
    }
}

// Function to open the modal
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'flex'; // Show the modal as a flex container
    modalImg.src = imageSrc; // Set the modal image to the clicked image
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide the modal
    document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
}
