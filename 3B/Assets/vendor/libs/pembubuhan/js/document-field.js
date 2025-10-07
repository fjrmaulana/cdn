$("#documentValue").val("");
$("#documentValue").inputmask("decimal", {
  prefix: "",
  groupSeparator: ".",
  radixPoint: ",",
  autoGroup: true,
  rightAlign: false,
  digits: 0,
  removeMaskOnSubmit: true,
});

$("#exampleModal").on("shown.bs.modal", function () {
  $("#documentType").select2({
    dropdownParent: $("#exampleModal"),
  });
});

$(document).on("select2:open", () => {
  document.querySelector(".select2-search__field").focus();
});
