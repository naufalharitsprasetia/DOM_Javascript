var tanya = true;
while (tanya) {
  // Menangkap pilihan player
  var p = prompt("pilih: gajah, semut, orang");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  // menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = "SERI !!";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "MENANG!!";
    //   } else {
    //     hasil = "KALAH!!!";
    //   }
    hasil = comp == "orang" ? "MENANG!!" : "KALAH!!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!!" : "MENANG!!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!!" : "MENANG!!";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }

  // tampilkan hasilnya
  alert(
    "kamu Memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      " \nMaka Hasilnya : Kamu " +
      hasil
  );
  tanya = confirm("lagi ?");
}
alert("Terimakasih sudah bermain");
