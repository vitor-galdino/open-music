const switchTheme = () => {
    const btn = document.querySelector(".switch-button");
    btn.onclick = () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("dark-theme", true);
        } else {
            localStorage.setItem("dark-theme", false);
        }
    }
}
switchTheme();

const userPrefTheme = () => {
    const pref = JSON.parse(localStorage.getItem("dark-theme"));
    const btn = document.querySelector(".input-theme");

    if (pref) {
        document.body.classList.add("dark-theme");
        btn.checked = true;
    }
}

userPrefTheme();