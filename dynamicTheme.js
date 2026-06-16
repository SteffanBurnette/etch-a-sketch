function setTheme() {
    console.log("Clicked");

    const root = document.documentElement;
    const newTheme = root.className === "dark" ? "light" : "dark";

    root.className = newTheme; // Apply theme
    document.querySelector(".theme-name").textContent = newTheme;
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);
