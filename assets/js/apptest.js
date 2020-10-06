const signa = document.querySelectorAll("#logoa path");

for(let i = 0;i<signa.length;i++){
    console.log(`Letter ${i} is ${signa[i].getTotalLength()}`);
}
function myCopy() {
    /* Get the text field */
    var copyText = "Kobe#7109";
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Discord id copied");
  }