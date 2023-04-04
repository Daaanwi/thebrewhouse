var modal = document.getElementById('myModal');
var btns = document.querySelectorAll('button#read-more');
var span = document.getElementsByClassName('close')[0];

for (var i = 0; i < btns.length; i++) {
  if (btns[i].id === 'read-more') {
    btns[i].onclick = function () {
      modal.style.display = 'block';
      var contentId = this.getAttribute('data-content');
      var content = document.getElementById(contentId).innerHTML;
      document.getElementById('modalText').innerHTML = content;
    };
  }
}

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
