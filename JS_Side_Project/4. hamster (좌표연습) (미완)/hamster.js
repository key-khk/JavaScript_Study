window.onload = function () {
  let field = document.getElementById('field');
  let hamster = document.getElementById('hamster');
  let coords = document.getElementById('coords');
  let ul = document.getElementById('ul');

  field.onclick = function (event) {
  let fieldCoords = this.getBoundingClientRect();

  let hamsterCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - hamster.clientHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - hamster.clientWidth / 2
  };

  field.ondblclick = function (event) {
    hamster.classList.toggle('stAngry');
  };

  if (hamsterCoords.top < 0) hamsterCoords.top = 0;

  if (hamsterCoords.left < 0) hamsterCoords.left = 0;

  if (hamsterCoords.left + hamster.clientWidth > field.clientWidth &&
    hamsterCoords.top + hamster.clientHeight > field.clientHeight) {
    hamsterCoords.left = field.clientWidth - hamster.clientWidth;
    hamsterCoords.top = field.clientHeight - hamster.clientHeight;
  } else {

  }

  hamster.style.left = hamsterCoords.left + 'px';
  hamster.style.top = hamsterCoords.top + 'px';
  
  coords.innerHTML = event.clientX + ':' + event.clientY ;
}
//클릭방지
function noMouseDown(tag) {
  tag.onmousedown = function () {
    return false
  }
}
noMouseDown(field);
noMouseDown(ul);

//clickSelect
  ul.onclick = function(event) {
    if (event.target.tagName != "LI") return;

    if (event.ctrlKey || event.metaKey) {
      toggleSelect(event.target);
    } else {
      singleSelect(event.target);
    }
  }
  ul.onmousedown = function() {
    return false;
  };

  function toggleSelect(li) {
    li.classList.toggle('selected');
  }

  function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for(let elem of selected) {
      elem.classList.remove('selected');
    }
    li.classList.add('selected');
  }
}


