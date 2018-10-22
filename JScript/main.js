function photoSearch() {
    var input, filter, li, a, i;
      input = document.getElementById('searchInput');
      filter = input.value.toUpperCase('photoList');
      li = document.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
