var tablinks = document.getElementsByClassName("tab-links");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentabs(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  document
    .querySelector(`.tab-links[onclick="opentabs('${tabname}')"]`)
    .classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu =document.getElementById('sidemenu');
const openmenu=()=>{
  sidemenu.style.right='0';
}
const closemenu=()=>{
  sidemenu.style.right='-200px';
}