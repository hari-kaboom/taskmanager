
let give=document.getElementById('test')
let addbtn=document.getElementById('click')
let addlist=document.getElementById('mylist')
addbtn.onclick=()=>{ 
console.log(give.value)
  newlistitem=document.createElement('li')
  newlistitem.innerText=give.value
addlist.appendChild(newlistitem)
}




/*give=document.getElementById('test')
addbtn=document.getElementById('click')
addlist=document.getElementById('mylist')

var item =''
for(let i=0;i<100;i++){
  if(i%3==0) item='fiz'
  if(i%4==0) item='buzz'
  addlist.innerHTML+='<li>'item'</li>' 
}


<html>
  <body>
    <input id='test'>      
    <button id='click'> real</button>
    <ul id='mylist'>
      <li>list1</li>
      
      </ul>
   
  </body>
</html>


give=document.getElementById('test')
addbtn=document.getElementById('click')
addlist=document.getElementById('mylist')

var item =''
for(let i=0;i<100;i++){
  if(i%3==0) item='fiz'
  if(i%4==0) item='buzz'
  addlist.innerHTML+='<li>'+item+'</li>' 
}
addbtn.onclick=()=>{ 
console.log(give.value)
  addlist.innerHTML+='<li>'+give.value+
'</li>' 

}

removebutn.onclick=()=>{ 
//console.log(give.value)
  addlist.remove()  */