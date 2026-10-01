// =========================
// MAIN INTERACTIONS
// =========================

const eventCards =
    document.querySelectorAll(".event-card");


eventCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const eventName =
            card.querySelector("h3").innerText;

        console.log(
            "Selected event:",
            eventName
        );

    });

});
