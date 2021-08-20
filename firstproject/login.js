var first  = [];
var name  = [];
var phone  = [];
var pass = [];

function ADDButton(){
    var n =1;
     var x = 0;
     var taB = document.getElementById('table2');
     var NEWTaB = taB.insertRow(n);

            name[x] = document.getElementById('name').value;
          phone[x] = document.getElementById('phone').value;
         pass[x] = document.getElementById('pass').value;
       

        var cell1 = NEWTaB.insertCell(0);
        var cell2 = NEWTaB.insertCell(1);
        var cell3 = NEWTaB.insertCell(2);
       

        cell1.innerHTML = name[x]
        cell2.innerHTML = phone[x]
        cell3.innerHTML = pass[x]
        
        n++;
        x++;
}