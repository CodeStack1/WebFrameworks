// document.getElementById("mainheading").innerText=NCU;

function changeText(){
    p=document.getElementById("mainheading");
    // p.innerText=p.innerText+"NCU";
    p.innerHTML="<h1>Main Heading</h1>"
    l=document.getElementsByTagName("label")[0];
    l.innerHTML="This is in the label";
    r=document.getElementsByName("radioinput")[0];
    console.log(r.value);
    i=document.getElementById("inputbox");
    console.log(i.value);
    document.getElementById("inputbox").value=eval(document.getElementById("inpputbox").value+"1");
}