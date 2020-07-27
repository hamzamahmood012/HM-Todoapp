// const addbutton =document.querySelector( '.addbutton');
// var input2value = document.querySelector('.input2');
// const container =document.querySelector('.container');

// class item{
//     constructor(item2name){
//         this.creatdiv(itemName);
//     }
//     creatDiv(itemName){
//         let input2 =document.createElement('input2');
//         input2.value =itemName;
//         input2.disabeld =true;
//         input2.classlist.add('item_input2');
//         input2type ="text";
         
//         let itemBox =document.createElement('div');
//         itemBox.classList.add('editButton');

//         let editbutton=document.createElement('button');
//         editbutton.innerHTML ="Edit"
//         editbutton.classlist.add('editButton');

//         let deletebutton=document.createElement('button');
//         deletebutton.innerHTML ="Remove"
//         editbutton.classlist.add('deleteButton');
   
//         container.appendChild(itemBox);

//         itemBox.appendChild(input2);
//         itemBox.appendChild(editButton);
//         itemBox.appendChild(deleteButton);


//     }
// }
// new item ("sports");

var list =document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var delbtn =document.createElement("button")
    var deltext =document.createTextNode("DELETE")
    delbtn.setAttribute("class" , "btn")
    delbtn.setAttribute("onclick" ,"deleteItem(this)" )
    delbtn.appendChild(deltext)

   var editbtn =document.createElement("button")
   var editText =document.createTextNode("EDIT")
   editbtn.setAttribute("class" , "btn1")
   editbtn.appendChild(editText)
   editbtn.setAttribute("onclick" ,"editItem(this)" )


    li.appendChild(delbtn)
    li.appendChild(editbtn)

    list.appendChild(li)
    todo_item.value =""
    

 }
function deleteItem(e){
e.parentNode.remove()
}


function editItem(e){
console.log(e.parentNode.firstChild.nodeValue)
var val =prompt("enter value", e.parentNode.firstChild.nodeValue )
e.parentNode.firstChild.nodeValue = val;

}