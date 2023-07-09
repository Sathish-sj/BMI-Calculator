<script>
    var currentPageUrl = window.location.href;
    var calcLink = document.getElementById("calc-link");
    var bmiLink = document.getElementById("bmi-link");
    var ageLink = document.getElementById("age-link");
    var aboutLink = document.getElementById("about-link");

    if (currentPageUrl.includes("index.html")) 
    {
    calcLink.classList.add("active");
    } else if (currentPageUrl.includes("bmi.html")) {
    bmiLink.classList.add("active");
    } else if (currentPageUrl.includes("age_calc.html")) {
    ageLink.classList.add("active");
    } else if (currentPageUrl.includes("about.html")) {
    aboutLink.classList.add("active");
    }

    let heightInput = document.querySelector("#height");
    let weightInput = document.querySelector("#weight");
    let Age = document.querySelector("#age");
    let gender = document.querySelector("#gender");

    let popup = document.querySelector("#Mymodal");


    function calc() {
        if (heightInput.value == "" || weightInput.value == "" || Age.value == "" || gender.value == "") {
    
            popup.style.display = "block";
        }

        else {
            bmi_calc();
        }
    }
    function bmi_calc() {
        let heightInMeter = heightInput.value/100;
        let finalValue = (weightInput.value / (heightInMeter ** 2));
        let bmi = finalValue.toFixed(1)
        document.querySelector("#bmi_result").innerHTML = ( "Your BMI is " + bmi) ;

        let result = "";
        if(bmi<18.5){
        result = 'Underweight';
        }else if(18.5<=bmi&&bmi<=24.9){
        result = 'Healthy';
        }else if(25<=bmi&&bmi<=29.9){
        result = 'Overweight';
        }else if(30<=bmi&&bmi<=34.9){
        result = 'Obese';
        }else if(35<=bmi){
        result = 'Extremely obese';
        }

        document.querySelector("#bmi_comment").innerHTML = "You are " + result;

        if (result == 'Healthy') {
            document.querySelector("#bmi_comment").style.color = "rgba(0, 128, 0, 0.911)";
        }
        else if(result == 'Overweight' || result == 'Underweight') {
            document.querySelector("#bmi_comment").style.color ="orange"
        }
        else{
            document.querySelector("#bmi_comment").style.color="red"
        }

    }

    document.addEventListener("keydown", function(event) {
    const key = event.key;
    if(key === "Enter") {
        calc();    
    }
})

let close = document.querySelector(".close")

close.addEventListener("click", function(){
    popup.style.display = "none";
  } ) 

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
      clr();
    }
  }
</script>
