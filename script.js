// Toggle vertical menu visibility
function toggleMenu() {
    const verticalBar = document.getElementById("vertical-bar");
    verticalBar.style.display = verticalBar.style.display === "none" || verticalBar.style.display === "" ? "block" : "none";
}

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

// Define the initial parameters for the stability calculator
const parameters = [
    { id: "IS IN WAR", weight: 3, positive: false },
    { id: "IS LOOSING WAR", weight: 2.5, positive: false },
    { id: "HIGH CASUALTIES", weight: 2.5, positive: false },
    { id: "HAS RECESSION", weight: 2.25, positive: false },
    { id: "HAS HIGH INFLATION PAST 4 YEARS", weight: 2.25, positive: false },
    { id: "HAS STAGNATION LONG TERM", weight: 1, positive: false },
    { id: "FALLING POPULATION", weight: 0.75, positive: false },
    { id: "RECENT LOSS OF LAND", weight: 1, positive: false },
    { id: "ETHNIC INTERNAL ISSUES", weight: 1, positive: false },
    { id: "ECONOMIC DISPARITY", weight: 0.5, positive: false },
    { id: "HEALTHCARE LEVEL", weight: 0.5, positive: true },
    { id: "WELFARE LEVEL", weight: 0.5, positive: true },
    { id: "RECENT FOREIGN VICTORY", weight: 0.75, positive: true },
    { id: "RECENT UNIFYING FORCE", weight: 0.25, positive: true },
    { id: "ASSASSINATION OF LEADER", weight: 0.75, positive: false },
    { id: "NEW GOVERNMENT", weight: 0, positive: true },
    { id: "CORRUPTION", weight: 1, positive: false },
    { id: "INTERNAL LEGISLATIVE SCANDAL", weight: 0, positive: false },
    { id: "INTERNAL EXECUTIVE SCANDAL", weight: 0, positive: false },
    { id: "POSSITIVLY RECEIVED REFORMS", weight: 1, positive: true },
    { id: "NEGATIVELY RECEIVED REFORMS", weight: 1, positive: false },
    { id: "VACANT GOVERNMENT", weight: 5, positive: false },
    { id: "IS OCCUPIED", weight: 1, positive: false },
    { id: "OVEREXTENDED", weight: 1, positive: false },
    { id: "COLONY IN REBELLION", weight: 1.5, positive: false },
    { id: "UNPOPULAR GOVERNMENT", weight: 2.25, positive: false },
    { id: "HAS EQUAL GENDER RIGHTS", weight: 1.75, positive: true },
    { id: "RELIGIOUS INTERNAL ISSUES", weight: 0.85, positive: false },
    { id: "COMPLACENT CULTURE", weight: 3.5, positive: false },
    { id: "UNPOPULAR FOREIGN ACTIONS", weight: 1.75, positive: false },
    { id: "IS WINNING WAR", weight: 0, positive: true },
    { id: "INTERNAL POLICE CAPABILITIES", weight: 2.5, positive: true },
    { id: "HAS CENSORSHIP SUCCESS", weight: 1.8, positive: false },
    { id: "HAS CENSORSHIP FAILURE", weight: 1.5, positive: false },
    { id: "ONGOING INTERNAL PROPAGANDA", weight: 1.2, positive: false },
    { id: "FOREIGN NEGATIVE PROPAGANDA", weight: 1.5, positive: false },
    { id: "DEMOCRATIC LEVEL", weight: 4, positive: true },
    { id: "UPCOMING ELECTION", weight: 1.5, positive: false },
    { id: "RECENT RIGGED ELECTION", weight: 2, positive: false },
    { id: "IMAGRATION LEVEL", weight: 1.8, positive: true }
];

// Function to generate CVCs (input fields for parameters)
function generateCVCs() {
    const container = document.getElementById("parameter-container");

    parameters.forEach(param => {
        const div = document.createElement("div");
        div.className = "parameter";

        const label = document.createElement("label");
        label.textContent = param.id;

        const input = document.createElement("input");
        input.type = "number";
        input.step = "0.1";
        input.value = "0";
        input.dataset.id = param.id; // Attach the parameter ID to the input

        div.appendChild(label);
        div.appendChild(input);
        container.appendChild(div);
    });
}

// Function to calculate the stability score
function calculateStability() {
    let stabilityScore = 4;

    // Iterate through each parameter input and calculate the impact
    parameters.forEach(param => {
        const input = document.querySelector(`input[data-id="${param.id}"]`);
        const value = parseFloat(input.value) || 0;

        // Apply positive/negative effect based on the value
        let impact = param.positive ? value * param.weight : -(value * param.weight);
        stabilityScore += impact;
    });

    return stabilityScore;
}

// Update the stability score when the button is clicked
document.getElementById("calculateButton").addEventListener("click", () => {
    const stabilityScore = calculateStability();
    document.getElementById("stabilityScore").textContent = stabilityScore.toFixed(2);
});

// Generate the CVCs on page load for stability calculator
window.onload = generateCVCs;
