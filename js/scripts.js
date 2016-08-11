

$(document).ready(function() {

  $("form#button").submit(function(event) {

    var s1 = parseFloat($("input#side1").val());
    var s2 = parseFloat($("input#side2").val());
    var s3 = parseFloat($("input#side3").val());

// all sides equal
    if (s1 === s2 && s2 === s3 && s1 === s3) {
      alert("It is an EQUILATERAL triangle.");
// not a triangle
    } else if (s1 + s2 <= s3) {
        alert("That's not a triangle.");
    }  else if (s2 + s3 <= s1) {
        alert("That's not a triangle.");
    }  else if (s1 + s3 <= s2) {
        alert("That's not a triangle.");
// 2 sides equal
    } else if (s1 === s2 && s2 !== s3) {
        alert("It is an ISOSCELES triangle.");
    } else if (s2 === s3 && s2!== s1) {
        alert("It is an ISOSCELES triangle.");
    } else if (s1 === s3 && s3!== s2) {
        alert("It is an ISOSCELES triangle.");
// no sides equal
    } else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
        alert("It is an SCALENE triangle.");
    }
    event.preventDefault();
  });
});
