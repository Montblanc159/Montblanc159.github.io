function Redirect() {
  return window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

(confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) ? Redirect() : '';

var background = document.querySelector('body');
var paragraph1 = document.querySelectorAll('p');
var headings1 = document.querySelector('h1');
var headings2 = document.querySelectorAll('h2');
var headings3 = document.querySelectorAll('h3');


function myClickFunction() {
  document.getElementById("psychedelic").click();
}

i = true;

function psychedelicMode() {

  if (i === true) {
    background.className = 'bgpsychedelic';
    headings1.className = 'headpsychedelic';
    for (i = 0; i < paragraph1.length; i++) {
      paragraph1[i].className = "ppsychedelic";
    }

    for (i = 0; i < headings2.length; i++) {
      headings2[i].className = "headpsychedelic";
    }

    for (i = 0; i < headings3.length; i++) {
      headings3[i].className = "headpsychedelic";
    }

    return i = false;

  } else {

    background.className = '';
    headings1.className = '';
    for (i = 0; i < paragraph1.length; i++) {
      paragraph1[i].className = "";
    }

    for (i = 0; i < headings2.length; i++) {
      headings2[i].className = "";
    }

    for (i = 0; i < headings3.length; i++) {
      headings3[i].className = "";
    }

    return i = true;
  }

}
