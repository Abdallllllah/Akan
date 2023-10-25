var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input//
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);


  if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    console.log("reached year")
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
  }
}
//Calculate func//
function calculateDay(){
    getInput();
    dayOfWeek = (dayOfMonth + ((13 * (month + 1)) / 5) + year + (year / 4) + (century / 4) - 2 * century) % 7;

    console.log(dayOfWeek); //Test the calculateDay function//
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
}
//main caller func//
function checkDayOfWeek(){
    day = calculateDay();
     checkGender();
     console.log("The function runs");//Test chackDayOfWeek function//
}

//arrays//
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

//get selected radio button
function checkGender(){
  console.log("The function ");
    var gen = document.getElementsByName("rads");
    if(gen[0].checked == true){
        var gender = "male";
        console.log(gen[0])
    }else if(gen[1].checked == true){
        var gender = "female";
    }else {
      console.log("pass");//Test the radio buttons//
    }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "The Day is on a Saturday." + "  " + "Your Akan Name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "The Day is on a Sunday." + " " + "Your Akan Name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "The Day is on a Monday." + " " + "Your Akan Name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "The Day is on a Tuesday." + " " + "Your Akan Name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "The Day is on a Wednesday." + " " + "Your Akan Name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "The Day is on a Thursday." + " " + "Your Akan Name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "The day is on a Friday." + " " + "Your Akan Name is " + maleNames[6];
                break;
                default:
                
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "The Day is on a Sunday." + "  " + "Your Akan Name is " + femaleNames[0];
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "The Day is on a Monday." + " " + "Your Akan Name is " + femaleNames[1];
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "The Day is on a Tuesday." + " " + "Your Akan Name is " + femaleNames[2];
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "The Day is on a Wednesday." + " " + "Your Akan Name is " + femaleNames[3];
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "The Day is on a Thursday." + " " + "Your Akan Name is " + femaleNames[4];
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "The Day is on a Friday." + " " + "Your Akan Name is " + femaleNames[5];
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "The Day is on a Saturday." + " " + "Your Akan Name is " + femaleNames[6];
                  break;

              }
        break
        default:
        console.log("pass");
    }
}