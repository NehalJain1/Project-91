P1_name = localStorage.getItem("NP1");
P2_name = localStorage.getItem("NP2");
p1_score = 0;
p2_score = 0;

document.getElementById("P1_name").innerHTML = P1_name;
document.getElementById("P2_name").innerHTML = P2_name;

document.getElementById("Score_P1_name").innerHTML = " : " +p1_score;
document.getElementById("Score_P2_name").innerHTML = " : " +p2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + P1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + P2_name;

function send() {
   No1 = document.getElementById("N1").value;
   No2 = document.getElementById("N2").value;
   correct_ans = parseInt(No1) * parseInt(No2); 

   question = '<h4>'+ No1 + " X " + No2 + '</h4>' ;
   ans_box = '<br> Answer : <input type="text" id="input_check_box">' ;
   check_btn = '<br><br> <button class="btn btn-danger" id="check_btn" onclick="check()">Check</button>' ;
   Row = question + ans_box + check_btn ;

   document.getElementById("output").innerHTML = Row ;
   document.getElementsById("No1").value = "";
   document.getElementsById("No2").value = "";
}