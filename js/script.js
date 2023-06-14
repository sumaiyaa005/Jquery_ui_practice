$(function () {
  // draggable
  $("#draggable").draggable();
  // draggable scroll
  $("#draggable").draggable({ scroll: true });
  $("#draggable2").draggable({ scroll: true, scrollSensitivity: 100 });
  $("#draggable3").draggable({ scroll: true, scrollSpeed: 100 });
  // sortable
  $("#sortable").sortable();
  // Accordion
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s",
  };
  $("#accordion").accordion({
    icons: icons,
    collapsible: true,
  });
  $("#toggle")
    .button()
    .on("click", function () {
      if ($("#accordion").accordion("option", "icons")) {
        $("#accordion").accordion("option", "icons", null);
      } else {
        $("#accordion").accordion("option", "icons", icons);
      }
    });
  // autocomplete
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
  ];
  $("#tags").autocomplete({
    source: availableTags,
  });
  // datepicker
  $("#datepicker").datepicker();
});
