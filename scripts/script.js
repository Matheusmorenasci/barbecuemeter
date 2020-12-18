
let adults = document.getElementById("adults");
let children = document.getElementById("children");
let duration = document.getElementById("duration");


function calculate(){
   if (duration.value < 6) {
       let meat = 400;
       let beer = 1200;
       let soda = 1000;

       let totalMeat = adults.value * meat + meat/2 * children.value;
       let totalBeer = adults.value * beer;
       let totalSoda = adults.value * soda + soda/2 * children.value;

        let result = document.getElementById("result");

        result.innerHTML =  `<h2>You'll need:</h2>
                                <p>• ${totalMeat/1000}kg of meat;</p>
                                <p>• ${Math.ceil(totalBeer/355)} beer cans(355ml);</p>
                                <p>• ${Math.ceil(totalSoda/1000)} liters of soda;</p>`
         result.style.display = "inline-block";
   } else {
    let meat = 650;
    let beer = 2000;
    let soda = 1500;

    let totalMeat = adults.value * meat + meat/2 * children.value;
    let totalBeer = adults.value * beer;
    let totalSoda = adults.value * soda + soda/2 * children.value;

     let result = document.getElementById("result");

     result.innerHTML = `<h2>You'll need:</h2>
                            <p>• ${totalMeat/1000}kg of meat;</p>
                            <p>• ${Math.ceil(totalBeer/355)} beer cans(355ml);</p>
                            <p>• ${Math.ceil(totalSoda/2000)} liters of soda;</p>`
   result.style.display = "inline-block";
   }
}
