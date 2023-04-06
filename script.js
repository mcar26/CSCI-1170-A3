//index.html
// settings theme selection
if (document.getElementsByTagName("html")[0].id == "index") {
    let colorPalletButtons = document.querySelectorAll(".color_pallet");
    let themeButtons = document.querySelectorAll(".theme_option");
    let submitTheme = document.querySelector('.theme_color_submit');
    let theme; // can be 0 (light) or 1 (dark) - index in themes
    let colorPallet; // can be 0, 1, or 2 - index in pallets
    let rootElement = document.querySelector(':root');

    let pallet1 = ["#d5a5c5", "#411780", "#1b0030", "#ffc30e", "#e8a308", "white"];
    let pallet2 = ["#b4eddf", "#5874d1", "#4247c9", "#f2a5d6", "#d9719d", "black"];
    let pallet3 = ["#27ab60", "#d3f5b8", "#a3d68b", "#e87451", "#cf5d3a", "black"];
    let pallets = [pallet1, pallet2, pallet3];
    let palletClasses = ["purple_yellow_clicked", "blue_pink_clicked", "green_orange_clicked"];

    let lightTheme = ["white", "#f9f7fa", "black", "white"];
    let darkTheme = ["#423841", "#614a58", "white", "black"];
    let themes = [lightTheme, darkTheme];
    let themeClasses = ["light_clicked", "dark_clicked"];

    function changeColorPallet(n) {
        colorPallet = n;
        colorPalletButtons[n].classList.add(palletClasses[n]);
        for (let i = 0; i < pallets.length; i++) {
            if (i != n) {
                colorPalletButtons[i].classList.remove(palletClasses[i]);
            }
        }
    }

    function changeTheme(n) {
        theme = n;
        themeButtons[n].classList.add(themeClasses[n]);
        for (let i = 0; i < themes.length; i++) {
            if (i != n) {
                themeButtons[i].classList.remove(themeClasses[i]);
            }
        }
    }

    function setThemeColor() {
        if (colorPallet === undefined || theme === undefined ) {
            document.querySelector(".settings h3").innerHTML = "Choose a theme and a color pallet: <br> Please select both a theme and a color pallet before pressing submit!";
        } else {
            document.querySelector(".settings h3").innerHTML = "Choose a theme and a color pallet: ";
            rootElement.style.setProperty("--bg_sides_color", pallets[colorPallet][0]);
            rootElement.style.setProperty("--main_bg_color1", themes[theme][0]);
            rootElement.style.setProperty("--footer_color_1", pallets[colorPallet][1]);
            rootElement.style.setProperty("--footer_color_2", pallets[colorPallet][2]);
            rootElement.style.setProperty("--section_bg_color", themes[theme][1]);
            rootElement.style.setProperty("--highlight_color", pallets[colorPallet][3]);
            rootElement.style.setProperty("--highlight_color_2", pallets[colorPallet][4]);
            rootElement.style.setProperty("--text_color_main", themes[theme][2]);
            rootElement.style.setProperty("--text_color_footer", pallets[colorPallet][5]);
        }
    }

    for (let i = 0; i < pallets.length; i++) {
        colorPalletButtons[i].addEventListener("click", function () {changeColorPallet(i);});
    }

    for (let i = 0; i < themes.length; i++) {
        themeButtons[i].addEventListener("click", function () {changeTheme(i);});
    }

    submitTheme.addEventListener("click", setThemeColor);
    S
} else if (document.getElementsByTagName("html")[0].id == "about_me") {
    // about_me.html
    let notifButton = document.getElementById("notif_button");
    let inputButton = document.getElementById("input_button");
    let aniButton = document.getElementById("ani_button");
    let legAniBool = false;
    let legAniTimer;

    function notifClick() {
        window.alert("amoungus"); // sorry. couldn't think of anything else to put and the deadline's coming up so have an amongus i guess 
    }

    function inputClick() { 
        let textInput = document.createElement("textarea"); 
        textInput.name = "js_textarea";
        textInput.id = "js_textarea";
        textInput.rows = "6";
        textInput.placeholder = "Leave a message in my hidden textarea if you dare... It won't go anywhere, though :(";
        inputButton.parentNode.insertBefore(textInput, inputButton);
        inputButton.parentNode.removeChild(inputButton);

    }

    function animateClick() {
        let legs1 = document.createElement("img");
        legs1.src = "images/button_legs1_transparent.png";
        legs1.alt = "A pair of legs that makes up half of a simple walking animation.";
        legs1.style.width = "80%";
        aniButton.appendChild(legs1);
        aniButton.classList.add("button_move");
        legAniTimer = window.setInterval(function () {switchLegImg(legs1);}, 200);
        document.querySelector('label[for="ani_button"]').innerHTML = "I'm outta here...";
    }

    function switchLegImg(legsImg) {
        if (legAniBool == true) {
            legsImg.src = "images/button_legs2_transparent.png";
            legAniBool = false;
        } else {
            legsImg.src = "images/button_legs1_transparent.png";
            legAniBool = true;
        }
    }

    function finishLegAni () {
        clearInterval(legAniTimer); 
        document.querySelector('label[for="ani_button"]').innerHTML = "Just kidding!";
        document.querySelector("#ani_button").removeChild(document.querySelector("#ani_button img"));
        aniButton.classList.remove("button_move");
    }

    notifButton.addEventListener("click", notifClick);
    inputButton.addEventListener("click", inputClick);
    aniButton.addEventListener("click", animateClick);
    aniButton.addEventListener("animationend", finishLegAni);
}

