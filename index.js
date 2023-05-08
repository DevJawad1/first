array=[]
function disp() {
    ptag.innerHTML=""
    for(let index=0; index < array.length;index++){ 
        ptag.innerHTML+=`
       <div id="div">
        <h5 class="text-black" style="border-bottom:1px solid grey;height:37px;text-align:center">${array[index]}</h5> <div class=" " style="display:flex;justify-content:space-between;width:200px;margin:auto;margin-top:px"><button class="btn btn-primary" onclick="del(${index})" style="height:40px; margin-top:5px">Delete</button><button class="btn btn-warning" onclick="edit(${index})" style="height:40px;margin-top:5px">Edit</button>
        </div>
        </div>
        `
        shock.innerHTML=""
 }
}    
function add(){
    if(rec.value==""){
        showAlert('No Activity to add','alert alert-danger mt-3')
        setTimeout(()=> {
            showAlert('','')
        },3000)
        // shock.innerHTML="Kindly enter your item"
    }
    else{
        array.push(rec.value)
        shock.innerHTML=""
        rec.value=""
        disp()
        showAlert('Activity Add successful','alert alert-success mt-3')
        setTimeout(()=> {
            showAlert('','')
        },3500)
    }
}
function del(todoIndex){
    array.splice(todoIndex,1)
    disp()
}
function edit(editingindex){
   var user=prompt("Enter replacing Activity")
    if(rec.value==""){
        array.splice(editingindex,1,user)
        rec.value=""
        showAlert('Edit successful','alert alert-success mt-3')
        setTimeout(()=> {
            showAlert('','')
        },3500)
        disp()    
        shock.innerHTML=""
    }
   
}

function deleteall(){
      var all=confirm("Are you sure you are deleting all Activities")
      if(shock.innerHTML==""||ptag.innerHTML==""){
          shock.innerHTML="Items Deleted"
          if(all==true){
            array.splice(0,array.length)
            disp()
          }
      }
      else{
        if(all==true){
            array.splice(0,array.length)
            disp()
            shock.innerHTML=""
        }
        else{
          disp()
      }  
      }
    
}
function showAlert(msg, className){
    alertmsg.innerText=msg
    alertmsg.className= className
}