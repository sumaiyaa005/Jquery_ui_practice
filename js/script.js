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
  // menu
  $("#menu").menu();
  // progressbar
  $("#progressbar").progressbar({
    value: false,
  });
  $("button").on("click", function (event) {
    var target = $(event.target),
      progressbar = $("#progressbar"),
      progressbarValue = progressbar.find(".ui-progressbar-value");

    if (target.is("#numButton")) {
      progressbar.progressbar("option", {
        value: Math.floor(Math.random() * 100),
      });
    } else if (target.is("#colorButton")) {
      progressbarValue.css({
        background: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    } else if (target.is("#falseButton")) {
      progressbar.progressbar("option", "value", false);
    }
  });
  // selectmenu
  $("#speed").selectmenu();

  $("#files").selectmenu();

  $("#number").selectmenu().selectmenu("menuWidget").addClass("overflow");

  $("#salutation").selectmenu();
  // slider
  $("#slider").slider();
  // tabs
  $("#tabs").tabs({
    collapsible: true,
    event: "mouseover",
  });

  // toggler
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = { percent: 50 };
    } else if (selectedEffect === "size") {
      options = { to: { width: 280, height: 185 } };
    }

    // Run the effect
    $("#effect").show(selectedEffect, options, 500, callback);
  }

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function () {
      $("#effect:visible").removeAttr("style").fadeOut();
    }, 1000);
  }

  // Set effect from select menu value
  $("#button").on("click", function () {
    runEffect();
  });

  $("#effect").hide();
  // tooltip
  $("#age").tooltip();
  // addclass

  $(function () {
    $("#addclass_btn").on("click", function () {
      $("#effect_addclass").addClass("newClass", 1000, callback);
    });

    function callback() {
      setTimeout(function () {
        $("#effect_addclass").removeClass("newClass");
      }, 1500);
    }
  });

  // Draggable
  $("#draggable_drop").draggable();
  $("#droppable").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
    },
  });
  // resizable
  $("#resizable").resizable();
  // selectable
  $("#selectable").selectable();
  // checkboxradio
  $('input[type="checkbox"],[type="radio"]').checkboxradio();
});
