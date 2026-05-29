const button = document.getElementById("photo")
button.addEventListener("click", function(){
    
// if(document.querySelector("image") === "1st.png"){
// document.getElementById("photo") = "2nd.png"
// }
// else{
//    document.getElementById("photo") = "1st.png"

// }

if(document.querySelector("img").getAttribute("src") === "1st.png"){
    document.querySelector("img").setAttribute("src", "2nd.png");
    document.getElementById("notice").innerHTML = "<i>Background Color : Dark Blue</i>"
}
else{
    document.querySelector("img").setAttribute("src","1st.png")
        document.getElementById("notice").innerHTML = "<i>Background Color : Red</i>"

}
})
const buttn = document.getElementById("btn")
buttn.addEventListener("click", function(){
    
// if(document.querySelector("image") === "1st.png"){
// document.getElementById("photo") = "2nd.png"
// }
// else{
//    document.getElementById("photo") = "1st.png"

// }

if(document.querySelector("img").getAttribute("src") === "1st.png"){
    document.querySelector("img").setAttribute("src", "2nd.png");
    document.getElementById("notice").innerHTML = "<i>Background Color : Dark Blue</i>"
}
else{
    document.querySelector("img").setAttribute("src","1st.png")
        document.getElementById("notice").innerHTML = "<i>Background Color : Red</i>"

}
})
