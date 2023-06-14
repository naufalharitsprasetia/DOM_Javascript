// DOM Selection
// document.getElementById() -> element
const judulHalaman = document.getElementById("judul");
judulHalaman.style.color = "red";
judulHalaman.style.backgroundColor = "grey";
judulHalaman.innerHTML = "Selamat Malam";

// document.getElementsByTagName()
// -> HTMLCollection
const pe = document.getElementsByTagName("p");
pe[2].style.backgroundColor = "blue";

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName()
// -> HTMLCollection
const pe1 = document.getElementsByClassName("kelasSatu")[0];
pe1.innerHTML = "INI DIUBAH !!!";
