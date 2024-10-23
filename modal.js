// Show modal with larger image
function showModal(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex"; // Display modal
    modalImage.src = src; // Set modal image source
    document.body.style.overflow = "hidden"; // Disable scroll

    // Close modal when clicking outside the image
    modal.onclick = closeModal;
}

// Close modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Hide modal
    document.body.style.overflow = "auto"; // Enable scroll
}

// Add event listeners to images for modal display
document.querySelectorAll('.data-image').forEach(image => {
    image.addEventListener('click', () => showModal(image.src));
});
