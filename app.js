console.log('Firebase Todo App');


var list = document.getElementById('list')

firebase.database().ref('todos').on('child_added', function(data){

    // create li tag with text node
      var li = document.createElement('li')
      var liText = document.createTextNode(data.val().value)
        li.appendChild(liText)

    // create delete button    
      var delBtn = document.createElement("button")
      var delText = document.createTextNode("DELETE")

      delBtn.setAttribute("class", 'btn btn-primary btn-sm butt')
      delBtn.setAttribute("id", data.val().key)
      delBtn.setAttribute("onclick", "deleteItem(this)")
      delBtn.appendChild(delText)

    // create edit button 
      var editBtn = document.createElement("button")
      var editText = document.createTextNode("EDIT")  
    
      editBtn.setAttribute("class", 'btn btn-primary btn-sm butt')
      editBtn.setAttribute("id", data.val().key)
      editBtn.setAttribute("onclick", "editItem(this)")
      editBtn.appendChild(editText)       

    li.appendChild(delBtn)  
    li.appendChild(editBtn)

    list.appendChild(li)
    list.setAttribute('class', 'list-group-item');    
})

function addTodo() {
    var todo_item = document.getElementById('todo-item')
    var database = firebase.database().ref('todos')
    var key = database.push().key
    var todo = {
      value: todo_item.value,
      key: key
    }

    database.child(key).set(todo)    

    todo_item.value = " ";
}


function deleteItem(e) {
  firebase.database().ref('todos').child(e.id).remove()    
  e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ''
}

function editItem(e) {    
    var val = e.parentNode.firstChild.nodeValue 
    var editValue = prompt("Enter edit value", val)

    var editTodo = {
      value: editValue,
      key: e.id,
    }

     firebase.database().ref('todos').child(e.id).set(editTodo)     
     e.parentNode.firstChild.nodeValue = editValue
}


























































//   var list = document.getElementById('list')

//   function addTodo() {
//     var todo_item = document.getElementById('todo-item')

//     // create li tag with text node
//     var li = document.createElement('li')
//     var liText = document.createTextNode(todo_item.value)
//     var key = firebase.database().ref('todo/todoData').push().key
//     var data = {
//         student: todo_item.value,
//         key: key
//     } 
      
//       li.appendChild(liText)
      

     

//     // create delete button    
//     var delBtn = document.createElement("button")
//     var delText = document.createTextNode("DELETE")

//       delBtn.setAttribute("class", 'btn btn-primary btn-sm butt')
//       delBtn.setAttribute("onclick", "deleteItem(this)")
//       delBtn.appendChild(delText)

//     //create edit button 
//     var editBtn = document.createElement("button")
//     var editText = document.createTextNode("EDIT")  
    
//        editBtn.setAttribute("class", 'btn btn-primary btn-sm butt')
//        editBtn.setAttribute("onclick", "editItem(this)")
//        editBtn.appendChild(editText)       

//     li.appendChild(delBtn)  
//     li.appendChild(editBtn)

//     list.appendChild(li)
//     list.setAttribute('class', 'list-group-item');

//     todo_item.value = ""    
    
//     firebase.database().ref('todo/').push(data)
    
// }

//  function getFirebaseData() {     
//     firebase.database().ref('todo/').on('child_added', function(data){     
               
//         var liTexts = data.val().student
//         var text = "";
//          for(var a = 0; a > liTexts.length; a++) {
//             // document.write(liText[a])
//              text += liTexts[a] + " "; 
                
//          }
//            document.getElementById("demo").innerHTML = text;
//           console.log(liTexts);
//     })     
//  }

//  getFirebaseData()


 