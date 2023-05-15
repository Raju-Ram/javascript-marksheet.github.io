var tablestart = "<table id='table'>"
var tableEnd = "</table>"
var tr = "<tr>"
var trEnd = "</tr>"
var th = "<th>"
var thEnd = "</th>"

var th_colspan_2 = "<th colspan='2'>"
var td_colspan_2 = "<th colspan='2'>"
var th_colspan_3 = "<th colspan='3'>"
var td_colspan_3 = "<td colspan='3'>"
var td_colspan_5 = "<td colspan='5'>"
var th_colspan_5 = "<th colspan='5'>"
var td = "<td>"
var tdEnd = "</td>"
var resultspan = "<span id ='result'></span>"
var percentspan = "<span id ='per'></span>"
var totalspan = "<span id =''></total>"




function result() {
    var regNo = document.getElementById('reg_no').value;
    var name = document.getElementById('name').value;
    var birth = document.getElementById('birth').value;
    var hindi = document.getElementById('hindi').value;
    var english = document.getElementById('english').value;
    var math = document.getElementById('math').value;
    var science = document.getElementById('science').value;
    var ss = document.getElementById('ss').value;
    var total = parseInt(hindi) + parseInt(english) + parseInt(math) + parseInt(science) + parseInt(ss);

    var marks = 500;
    markpercent = total / 500 * 100;

console.log("hello")


    var table = "";
    table += tablestart;
    table += tr + th_colspan_2 + "register number" + thEnd + td_colspan_3 + regNo + tdEnd + trEnd;
    table += tr + th_colspan_2 + "name" + thEnd + td_colspan_3 + name + tdEnd + trEnd;
    table += tr + th_colspan_2 + "date of birth" + thEnd + td_colspan_3 + birth + tdEnd + trEnd;
    table += tr + td_colspan_5 + "&nbsp" + tdEnd + trEnd;
    table += tr + th + "subject" + thEnd + th + "total mark" + thEnd + th_colspan_2 + "obitant marks" + thEnd + th + "total" + thEnd + th + "total" + thEnd + trEnd;
    table += tr + th + "hindi" + thEnd + td + "l00" + tdEnd + td + "36" + tdEnd + td + "48" + tdEnd + td + "hindi" + tdEnd + trEnd;
    table += tr + td + "english" + thEnd + td + "100" + tdEnd + td + "36" + tdEnd + td + "48" + tdEnd + td + "english" + tdEnd + trEnd;
    table += tr + td + "math" + thEnd + td + "l00" + tdEnd + td + "36" + tdEnd + td + "48" + tdEnd + td + "math" + tdEnd + trEnd;
    table += tr + td + "science" + thEnd + td + "l00" + tdEnd + td + "36" + tdEnd + td + "48" + tdEnd + td + "science" + tdEnd + trEnd;
    table += tr + td + "social science" + thEnd + td + "l00" + tdEnd + td + "36" + tdEnd + td + "48" + tdEnd + td + "social science" + tdEnd + trEnd;
    table += tr + td_colspan_5 + "&nbsp" + tdEnd + trEnd;
    table += tr + td_colspan_2 + "result:" + resultspan + tdEnd + td_colspan_2 + markpercent + tdEnd + td + total + tdEnd + trEnd;
    table += tableEnd;




    document.write(table)
    if (markpercent >= 60) {
        document.getElementById('result').innerText = "first"

    }

else if (markpercent>=41&&markpercent<60){
    document.getElementById('result').innerText = "second"


}
else{
    document.getElementById('result').innerText = "fail"

}
document.getElementById('table').style.margin="auto"
document.getElementById('table').style.padding="30px"
document.getElementById('table').style.width="50vw"
document.getElementById('table').style.border="1px solid black"
document.getElementById('table').style.backgroundColor="LIGHT YELLOW"



}

