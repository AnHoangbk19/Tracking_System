let on_off_stt = 1

function opensidebar(){
    document.getElementById("leftside").style.width = "20%";
}
function closesidebar(){
    document.getElementById("leftside").style.width = "4%";

    document.getElementById("rightside").style.width = "96%";
    leftelement = document.getElementById("leftside");
    
}
function changestatus(){
    var left = document.getElementById("leftside");
    var right = document.getElementById("rightside");
    if (on_off_stt == 1){
        // left.className += " closesidebar";
        // right.className += " closesidebar";
        left.style.width = "4%";
        right.style.width= "96%";

        ele = left.getElementsByClassName("menutext");
        ele1 = left.getElementsByClassName("menutitle");
        for (var i = 0 ; i < ele.length; i++){
            ele[i].style.display = "none";
        }
        for (var i = 0 ; i < ele1.length; i++){
            ele1[i].style.display = "none";
        }
        on_off_stt = 0
        console.log("1")
    }
    else {
        console.log("0")
        // left.classList.remove("closesidebar");
        // right.classList.remove("closesidebar");
        ele = left.getElementsByClassName("menutext");
        ele1 = left.getElementsByClassName("menutitle");
        for (var i = 0 ; i < ele.length; i++){
            ele[i].style.display = "block";
        }
        for (var i = 0 ; i < ele1.length; i++){
            ele1[i].style.display = "block";
        }
        left.style.width = "20%";
        right.style.width= "80%";
        on_off_stt = 1
    }
}



