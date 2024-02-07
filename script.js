$(document).ready(function () {
  $("#btn-add").click(function () {
    $("add").css("display", "inline");
  });

  $("#btn-del").click(function () {
    $("del").css("display", "inline");
  });

  $("#btn-gap").click(function () {
    $("gap").css("display", "inline");
  });

  $("#btn-damage").click(function () {
    $("damage").css("display", "inline");
  });

  $("#btn-corr").click(function () {
    $("corr").css("display", "inline");
    //$("sic").css("display", "none");
  });

  $("#btn-hide").click(function () {
    $("add, del, gap, damage, corr").hide();
  });
});