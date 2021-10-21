function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


  function clickDeleteConfirm() {
    var bTags = document.getElementsByTagName("button");
    var _searchText = "Delete";
    var _found;
    
    for (var i = 0; i < bTags.length; i++) {
        
      if (bTags[i].textContent == _searchText) {
        _found = bTags[i];
       
      }
    }
    _found.click();
}

function clickDelete() {
    var bTags = document.getElementsByTagName("span");
    var _searchText = "delete";
    var _found;
    
    for (var i = 0; i < bTags.length; i++) {
      if (bTags[i].textContent == _searchText) {
        _found = bTags[i];
       // break;
      }
    }
    _found.click();
}

function fuckit(tag) {
        tag.click();
}

function run () {
var aTags = document.getElementsByTagName("button");
var searchText = "more options";
var currentTime = 0;
var timeInterval = 1500;


for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].ariaLabel == searchText) {
    currentTime = currentTime + timeInterval;
    setTimeout(fuckit(aTags[i]), currentTime);
    currentTime = currentTime + timeInterval;
    setTimeout(clickDelete(), currentTime);
    //currentTime = currentTime + timeInterval;
    //setTimeout(clickDeleteConfirm(), currentTime);
    scrollBy(0,200);
  }
}

}
run();
