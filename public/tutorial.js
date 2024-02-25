function showContent(contentId) {
  var contentDivs = document.querySelectorAll('.content');
  contentDivs.forEach(function (div) {
    div.classList.remove('active');
  });

  var selectedContent = document.getElementById(contentId);
  selectedContent.classList.add('active');
}
