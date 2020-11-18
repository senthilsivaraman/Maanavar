const toggleForm = () => {
  const containers1 = document.querySelector('.containers1');
  containers1.classList.toggle('active');
};


var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    this.mini = true;
  }
}


