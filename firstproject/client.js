


var first  = [];
var last  = [];
var first  = [];
var num  = [];
var email  = [];
var pas  = [];
var confirm = [];
function ADD(){
    var n =1;
     var x = 0;
     var taB = document.getElementById('tableData');
     var NEWTaB = taB.insertRow(n);

        first[x] = document.getElementById('user').value;
        last[x] = document.getElementById('last').value;
         num[x] = document.getElementById('phone').value;
         email[x] = document.getElementById('email').value;
         pas[x] = document.getElementById('pass').value;
        //  confirm[x] = document.getElementById('confirmpass').value;

        var cell1 = NEWTaB.insertCell(0);
        var cell2 = NEWTaB.insertCell(1);
        var cell3 = NEWTaB.insertCell(2);
        var cell4 = NEWTaB.insertCell(3);
        var cell5 = NEWTaB.insertCell(4);
        var cell6 = NEWTaB.insertCell(5);


        cell1.innerHTML = first[x]
        cell2.innerHTML = last[x]
        cell3.innerHTML = num[x]
        cell4.innerHTML = email[x]
        cell5.innerHTML = pas[x]
        // cell6.innerHTML = confirmpass[x]

        n++;
        x++;
        
       


}



