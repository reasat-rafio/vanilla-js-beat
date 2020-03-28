
window.addEventListener("load", () => {
    const pads = document.querySelectorAll(".pads div");
    const sound = document.querySelectorAll(".sound");
    const visual = document.querySelector(".visual");
    const color = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "rgb(87, 71, 235)",
        "rgb(65, 240, 211)"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            sound[index].currentTime = 0;
            sound[index].play();

            animation(index)
        })
    })

    function animation(index) {

        const bubble = document.createElement("div")
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = "jump 1s ease"
        visual.appendChild(bubble)

        bubble.addEventListener("animationend", function () {
            visual.removeChild(this)
        })
        console.log(visual);
    }

})