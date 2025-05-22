let names = []
let nameIndex = 0;
let namesMax = 10000;

document.addEventListener('DOMContentLoaded', () => {
    const ttl_dice = document.getElementById('titleDice');
    const gen_btn = document.getElementById('generateButton');
    const nm_ipt = document.getElementById('nameInput');
    const prev_btn = document.getElementById('prev');
    const next_btn = document.getElementById('next');
    let name = "";

    prev_btn.style.visibility = "hidden";
    next_btn.style.visibility = "hidden";

    [ttl_dice, gen_btn].forEach(function (element) {
        element.addEventListener('click', () => {
            name = generateName()
            prev_btn.style.visibility = nameIndex > 0 ? "visible" : "hidden";
            next_btn.style.visibility = "visible";
            nm_ipt.value = name;
        })
    });

    prev_btn.addEventListener('click', () => {
        name = previous();
        prev_btn.style.visibility = name && nameIndex > 0 ? "visible" : "hidden";
        next_btn.style.visibility = "visible";
        if (name) {
            nm_ipt.value = name;
        }

    });

    next_btn.addEventListener('click', () => {
        name = next();
        next_btn.style.visibility = name ? "visible" : "hidden";
        prev_btn.style.visibility = "visible";
        nm_ipt.value = name;

    });
});


function generateName() {
    var name = ""
    name += begs[Math.floor(Math.random() * begs.length)];
    name += ends[Math.floor(Math.random() * ends.length)];
    if (names.length >= namesMax) {
        names.shift();
    }
    names.push(name);
    nameIndex = names.length - 1;
    return name;
}

function previous() {
    if (nameIndex > 0) {
        nameIndex--;
        return names[nameIndex];
    }
    nameIndex = 0;
    return names[0];
}

function next() {
    if (nameIndex < names.length - 1) {
        nameIndex++;
        return names[nameIndex];
    }
    nameIndex = names.length;
    return "";
}