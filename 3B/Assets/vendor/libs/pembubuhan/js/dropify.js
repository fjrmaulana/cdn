// npm package: dropify
// github link: https://github.com/JeremyFagis/dropify

$(function () {
  "use strict";

  $("#myDropify").dropify({
    messages: {
      default: "Klik disini atau seret dokumen PDF Anda maksimal 800KB ke area ini untuk diunggah",
      replace: "Seret dan lepas atau klik untuk mengganti",
      remove: "Hapus",
      error: "Ups, ada yang salah.",
    },
    error: {
      fileSize: "Ukuran dokumen tidak boleh lebih dari 800KB",
    },
  });
});
