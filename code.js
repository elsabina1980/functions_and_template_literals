function printName() {
    const result = document.getElementById('consoleName');
    const name = getName();

    result.innerText = `Your name is ${name}`;
    console.log(`Your name is ${name}`);
}

function printFullName() {
    const result = document.getElementById('consoleFullname');
    const fullname = getFullname();

    result.innerText = `Your full name is ${fullname}`;
    console.log(`Your fullName is ${fullname}`);
}

function getName() {
    return inputName.value;
}

function getSurname() {
    return inputSurname.value;
}

function getFullname() {
    return `${getName()} ${getSurname()}`;
}

let inputName = null,
    inputSurname = null;

document.addEventListener("DOMContentLoaded", function(event) {
    inputName = document.getElementById('yourName');
    inputSurname = document.getElementById('yourSurname');
});