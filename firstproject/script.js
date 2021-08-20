const userName = document.getElementById('username')
const password = document.getElementById('pass')
const button  = document.getElementById('btn')

 function ADDButton() {

   const newDiv  = document.createElement('div');
   const txt = document.createTextNode('text');
   newDiv.innerHTML = " ";

   document.body.appendChild(newDiv)


}
button.addEventListener('click', ADDButton)
ADDButton()

