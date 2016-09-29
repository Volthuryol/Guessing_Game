function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  } else {
    return true;
  }
};

var math1 = Math.floor((Math.random() * 9) + 0);
var math2 = Math.floor((Math.random() * 9) + 0);
var math3 = Math.floor((Math.random() * 9) + 0);

while (math1 == math2 || math1 == math3 || math2 == math3) {
  var math1 = Math.floor((Math.random() * 9) + 0);
  var math2 = Math.floor((Math.random() * 9) + 0);
  var math3 = Math.floor((Math.random() * 9) + 0);
}
console.log(math1);
console.log(math2);
console.log(math3);

var num = 10;

$(function () {


  $(".submit1").click(function (location) {
    var input1 = $("#input1").val();
    if (!input1) return;

    $("#a").html(input1);

    if (input1 == math1) {
      return $("#a").css("color", "lime");
    } else if (input1 == math2) {
      return $("#a").css("color", "yellow");
    } else if (input1 == math3) {
      return $("#a").css("color", "yellow");
    } else {
      return $("#a").css("color", "red");
    }
  });
  $(".submit2").click(function (location) {
    var input2 = $("#input2").val();
    if (!input2) return;

    $("#b").html(input2)

    if (input2 == math2) {
      return $("#b").css("color", "lime");
    } else if (input2 == math3) {
      return $("#b").css("color", "yellow");
    } else if (input2 == math1) {
      return $("#b").css("color", "yellow");
    } else {
      return $("#b").css("color", "red");
    }
  })
  $(".submit3").click(function (location) {
    var input3 = $("#input3").val();
    if (!input3) return;

    $("#c").html(input3)

    if (input3 == math3) {
      return $("#c").css("color", "lime");
    } else if (input3 == math1) {
      return $("#c").css("color", "yellow");
    } else if (input3 == math2) {
      return $("#c").css("color", "yellow");
    } else {
      return $("#c").css("color", "red");
    }
  })
  $("#counter").click(function (count) {
    num = num - 1;
    if (num == 0) {
      alert("blew it! " + "The numbers were: " + math1 + " " + math2 + " " + math3);
      location.reload();
    }
    $("#turns").html("You have " + num + " turns left.")
  });

});
$(".guess1").click(function win() {
  var ans1 = $("#input1").val();
  var ans2 = $("#input2").val();
  var ans3 = $("#input3").val();
  if (ans1 == math1 && ans2 == math2 && ans3 == math3) {
    alert("You win!!");
    location.reload();

  }


});



