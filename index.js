window.addEventListener("load",function(){
    const x=new XMLHttpRequest();
    x.onload=function details(){
        console.log(this.status)
        console.log(this.readyState)
        console.log(this.statusText)
        var obj=JSON.parse(this.responseText)
       document.getElementById("Q1").innerHTML="Q1."+obj[0].question
       document.getElementById("q1l1").innerHTML=obj[0].options[0]
       document.getElementById("q1l2").innerHTML=obj[0].options[1]
       document.getElementById("q1l3").innerHTML=obj[0].options[2]
       document.getElementById("q1l4").innerHTML=obj[0].options[3]

       document.getElementById("Q2").innerHTML="Q2."+obj[1].question
       document.getElementById("q2l1").innerHTML=obj[1].options[0]
       document.getElementById("q2l2").innerHTML=obj[1].options[1]
       document.getElementById("q2l3").innerHTML=obj[1].options[2]
       document.getElementById("q2l4").innerHTML=obj[1].options[3]

       document.getElementById("Q3").innerHTML="Q3."+obj[2].question
       document.getElementById("q3l1").innerHTML=obj[2].options[0]
       document.getElementById("q3l2").innerHTML=obj[2].options[1]
       document.getElementById("q3l3").innerHTML=obj[2].options[2]
       document.getElementById("q3l4").innerHTML=obj[2].options[3]

       document.getElementById("Q4").innerHTML="Q4."+obj[3].question
       document.getElementById("q4l1").innerHTML=obj[3].options[0]
       document.getElementById("q4l2").innerHTML=obj[3].options[1]
       document.getElementById("q4l3").innerHTML=obj[3].options[2]
       document.getElementById("q4l4").innerHTML=obj[3].options[3]

       document.getElementById("Q5").innerHTML="Q5."+obj[4].question
       document.getElementById("q5l1").innerHTML=obj[4].options[0]
       document.getElementById("q5l2").innerHTML=obj[4].options[1]
       document.getElementById("q5l3").innerHTML=obj[4].options[2]
       document.getElementById("q5l4").innerHTML=obj[4].options[3]
       document.getElementById("btn").style="display:flex"
       document.getElementById("header").style="display:flex"
       document.getElementById("container").style="display:flex"
       document.getElementsByTagName("body")[0].style="background-color:#54c3ef"
    }
    x.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/quiz")
    x.send()
})

var score=0;
var btn=document.getElementById("submit")
btn.addEventListener("click",function(){
    var div1=document.querySelector("#div1 input:checked").value
    if(div1=="Helga's Diadem"){
        var op1=document.getElementById("score")
        op1.innerHTML=score+=1
document.getElementById("q1l3").style="color:green"
    }
    else{
        document.getElementById("q1l1").style="color:red;text-decoration:line-through"
        document.getElementById("q1l2").style="color:red;text-decoration:line-through"
        document.getElementById("q1l4").style="color:red;text-decoration:line-through"
        var op1=document.getElementById("score")
        op1.innerHTML=score=0
        document.getElementById("q1l3").style="color:green"
    }
    var div2=document.querySelector("#div2 input:checked").value
    if(div2=="Grawp"){
        var op1=document.getElementById("score")
        op1.innerHTML=score+=1
        document.getElementById("q2l1").style="color:green"
    }
    else{
        document.getElementById("q2l2").style="color:red;text-decoration:line-through"
        document.getElementById("q2l3").style="color:red;text-decoration:line-through"
        document.getElementById("q2l4").style="color:red;text-decoration:line-through"
        document.getElementById("q2l1").style="color:green"
    }
    var div3=document.querySelector("#div3 input:checked").value
    if(div3=="Defence Against Drak Arts"){
        var op1=document.getElementById("score")
        op1.innerHTML=score+=1
        document.getElementById("q3l3").style="color:green"
    }
    else{
        document.getElementById("q3l1").style="color:red;text-decoration:line-through"
        document.getElementById("q3l2").style="color:red;text-decoration:line-through"
        document.getElementById("q3l4").style="color:red;text-decoration:line-through"
        document.getElementById("q3l3").style="color:green"
    }
    var div4=document.querySelector("#div4 input:checked").value
    if(div4=="Ravenclaw"){
        var op1=document.getElementById("score")
        op1.innerHTML=score+=1
        document.getElementById("q4l3").style="color:green"
    }
    else{
        document.getElementById("q4l1").style="color:red;text-decoration:line-through"
        document.getElementById("q4l2").style="color:red;text-decoration:line-through"
        document.getElementById("q4l4").style="color:red;text-decoration:line-through"
        document.getElementById("q4l3").style="color:green"
    }
    var div5=document.querySelector("#div5 input:checked").value
    if(div5=="Herbology"){
        var op1=document.getElementById("score")
        op1.innerHTML=score+=1
        document.getElementById("q5l2").style="color:green"
    }
    else{
        document.getElementById("q5l1").style="color:red;text-decoration:line-through"
        document.getElementById("q5l3").style="color:red;text-decoration:line-through"
        document.getElementById("q5l4").style="color:red;text-decoration:line-through"
        document.getElementById("q5l2").style="color:green"
    }
confirm("CHECK YOUR ANSWER BEFORE SUBMISION")
})
