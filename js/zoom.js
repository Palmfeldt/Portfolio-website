  // Function to zoom in on image
  function zoomIn(element) {
    // set the modal image to the image that was clicked
    document.getElementById("modalImg").src = element.src;
    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Function to zoom out of image
  function zoomOut() {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("myModal")
    modal.style.display = "none";
    // disable scroll
    document.body.style.overflow = "auto";
  }