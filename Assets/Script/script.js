function openPage(event, linkName) {
  var i, navcontent, navlinks;
  navcontent = document.getElementsByClassName("navcontent");
  for(i = 0; i < navcontent.length; i++) {
    navcontent[i].getElementsByClassName.display = "none"
  }
  navlinks = document.getElementsByClassName("navlinks");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks.className.replace (" active", "");
  }
  document.getElementById(linkName).style.display = "block";
  EventTarget.currentTarget.className += " active";
}