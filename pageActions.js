let espera = 600;

let sidebar = $(".sidebar");

let lista_todos = [];
console.log("si entre");
$(".lista").on("click", function () {
  var menu = $(this).find(".sub-menu");
  var menu_vacio = menu.hasClass("blank") ? true : false;

  //   console.log($(this).parent().parent().hasClass("close"));
  console.log(sidebar.hasClass("close"));
  if (sidebar.hasClass("close")) {
    console.log("cerrraso");
    if (menu_vacio) {
      remover($(".lista ul"));
    } else {
      var menu_opacidad = menu.css("opacity") === "0" ? true : false;

      if (menu_opacidad) {
        remover($(".lista .sub-menu"));
        añadir(menu);
      } else {
        remover(menu);
      }
    }
  } else {
    console.log("abierto");

    $(this).toggleClass("showMenu");
  }
});

$(".sub-menu a").on("click", function () {
  alert($(this).attr("value"));
});
$(".bx-menu").on("click", function () {
  $(".sidebar").toggleClass("close");
  sidebar.hasClass("close")
    ? remover($(".lista .sub-menu"))
    : añadir($(".lista .sub-menu"));
  $(".lista").removeClass("showMenu");
});

function abierto() {}

function añadir(elemento) {
  elemento.css("opacity", "1");
  // $(this).find(".sub-menu").css(" top", "0");
  elemento.css("pointer-events", "auto");
}

function remover(elemento) {
  elemento.css("opacity", "0");
  // $(this).find(".sub-menu").css(" top", "0");
  elemento.css("pointer-events", "none");
}
