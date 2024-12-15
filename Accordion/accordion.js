const main = document.querySelector("#accordion_main");

document.addEventListener("click", (event) => {
    const action = event.target.closest(".accordion_title");

    if (action) {
        const item = action.closest(".accordion_wrapper");
        const itemOpened = main.querySelector(".accordion_wrapper.open");

        if (item.classList.contains("open")) {
            item.classList.remove("open");
        } else {
            item.classList.add("open");
        }

        itemOpened?.classList.remove("open");
    };
});

document.querySelectorAll(".toggle_icon").forEach((button) => {
    button.addEventListener("click", function () {
        this.classList.toggle("open");
    });
})