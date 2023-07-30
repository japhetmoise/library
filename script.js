let myLibrary={};
let counter=0;
let no,ttl,auth,pg,rd,readcheck;
function mydate(){
    let dt=new Date();
    data=dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear();
    document.querySelector(".date").innerHTML=data;
}

function Book(isbn, title, author, pages, read){
    this.isbn=isbn;
    this.pages=pages;
    this.author=author;
    this.title=title;
    this.read=read;
}
function addBookToLibrary() {
    no=document.querySelector("#isbn").value;
    ttl=document.querySelector("#title").value;
    auth=document.querySelector("#author").value;
    pg=document.querySelector("#pages").value;
   readcheck=document.querySelector("#read");
    if(readcheck.checked==true){
        rd="Read";
    }
    else{
        rd="unread";
        }
        myLibrary=new Book(no,ttl,auth,pg,rd);
            counter++ 
            let table = document.getElementById("tbl");            
            let row = table.insertRow(-1);       
            let c1 = row.insertCell(0);
            let c2 = row.insertCell(1);
            let c3 = row.insertCell(2);  
            let c4 = row.insertCell(3); 
            let c5 = row.insertCell(4); 
               
            
            c1.innerText = myLibrary.isbn
            c2.innerText = myLibrary.title
            c3.innerText = myLibrary.author
            c4.innerText=myLibrary.pages
            c5.innerText=myLibrary.read
           
         }
         function delRow(){
            document.querySelector("#tbl").deleteRow(-1)
         }
         

function addDisplay(){
    document.querySelector(".left").style.display="block";
}
function hideDisplay(){
    document.querySelector(".left").style.display="none";
}
          
          
 


