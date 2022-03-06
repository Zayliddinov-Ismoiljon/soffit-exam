var a=false;


function openFunction(){
    document.getElementById("menu").style.width="100%";
    if(a){
        document.getElementById("menu").style.width="0px";
        a=false;
    }
    else{
        document.getElementById("menu").style.width="100%";
        a=true;
    }
}

function closeFunction(){
    document.getElementById("menu").style.width="0px";
}