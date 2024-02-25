// kicks user to the sign in page if they try to access the sample application without signing in
let signedIn = sessionStorage.getItem('signedIn');
console.log(signedIn)
if(signedIn == 'false'){
    console.log('return')
    window.location.href = './login.html';
}

function showContent(contentId) {
  var contentDivs = document.querySelectorAll('.content');
  contentDivs.forEach(function (div) {
    div.classList.remove('active');
  });

  var selectedContent = document.getElementById(contentId);
  selectedContent.classList.add('active');
}
