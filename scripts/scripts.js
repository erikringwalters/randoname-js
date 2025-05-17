document.addEventListener('DOMContentLoaded', () => {
    const gen_btn = document.getElementById('generateButton');
    const nm_ipt = document.getElementById('nameInput');

    if (gen_btn) {
        gen_btn.addEventListener('click', () => {
            nm_ipt.value = generateName()
        });
    } else {
        console.log("couldn't find generateButton")
    }
});

function generateName() {
    let name = ""
    name += begs[Math.floor(Math.random() * begs.length)]
    name += ends[Math.floor(Math.random() * ends.length)]
    return name
}