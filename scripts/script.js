"use strict";

var adults = document.getElementById("adults");
var children = document.getElementById("children");
var duration = document.getElementById("duration");

function calculate() {
  if (duration.value < 6) {
    var meat = 400;
    var beer = 1200;
    var soda = 1000;

    var totalMeat = adults.value * meat + meat / 2 * children.value;
    var totalBeer = adults.value * beer;
    var totalSoda = adults.value * soda + soda / 2 * children.value;

    var result = document.getElementById("result");

    result.innerHTML = "<h2>You'll need:</h2>\n                                <p>• " + totalMeat / 1000 + "kg of meat;</p>\n                                <p>• " + Math.ceil(totalBeer / 355) + " beer cans(355ml);</p>\n                                <p>• " + Math.ceil(totalSoda / 1000) + " liters of soda;</p>";
    result.style.display = "inline-block";
  } else {
    var _meat = 650;
    var _beer = 2000;
    var _soda = 1500;

    var _totalMeat = adults.value * _meat + _meat / 2 * children.value;
    var _totalBeer = adults.value * _beer;
    var _totalSoda = adults.value * _soda + _soda / 2 * children.value;

    var _result = document.getElementById("result");

    _result.innerHTML = "<h2>You'll need:</h2>\n                            <p>• " + _totalMeat / 1000 + "kg of meat;</p>\n                            <p>• " + Math.ceil(_totalBeer / 355) + " beer cans(355ml);</p>\n                            <p>• " + Math.ceil(_totalSoda / 2000) + " liters of soda;</p>";
    _result.style.display = "inline-block";
  }
}