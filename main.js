const button = document.getElementById("mybutton")
button.addEventListener("click", function(){
    // alert("Data saved successfully !!")
    // document.getElementById("notice").innerHTML = "Congratulations , Now your data safe For saving your data in cloud click the button 2 times !!"
if(document.getElementById("notice").innerHTML === "Your data in hands of Hackers.If you want to save your data so click the button !!"){
    alert("Congratulations , Now your data safe")
        // document.getElementById("notice").innerHTML = "Your data in hands of Hackers.<br> If you want to save your data so click the button !!"
    document.getElementById("notice").innerHTML = "Congratulations , Now your data safe For saving your data in cloud click the button 2 times !!"

}
else{
    alert("Data saved into cloud successfully !!")
    document.getElementById("notice").innerHTML = "Congratulations ,Thanks for using our service."
}
})