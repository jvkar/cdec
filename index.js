


  function showGallery1() {
    var gallery = document.getElementById("gallery1");
    gallery.style.display = "block";
}
function showGallery2() {
  var gallery = document.getElementById("gallery2");
  gallery.style.display = "block";
}
function showGallery3() {
  var gallery = document.getElementById("gallery3");
  gallery.style.display = "block";
}

function showGallery(galleryId) {
  var gallery = document.getElementById(galleryId);
  var galleryClose = document.getElementById(galleryId + "-close");
  gallery.style.display = "block";
  galleryClose.style.display = "block";
}

function hideGallery(galleryId) {
  var gallery = document.getElementById(galleryId);
  var galleryClose = document.getElementById(galleryId + "-close");
  gallery.style.display = "none";
  galleryClose.style.display = "block";
}
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
