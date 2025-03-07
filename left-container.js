function containerFluidder_matchMedia() {
  var mediaQuery = window.matchMedia("(max-width: 991px)");

  if (mediaQuery.matches) {
    var container = document.querySelector('.container');
    if (container) {
      var distanceFromWindow = container.offsetLeft;
      var containerStyles = window.getComputedStyle(container);
      var paddingOneSide = parseInt(containerStyles.paddingLeft);

      document.querySelectorAll('.container-fluid-sticky-left').forEach((el) => {
        el.style.marginRight = distanceFromWindow + 'px';
        el.style.paddingRight = paddingOneSide + 'px';
      });

      document.querySelectorAll('.container-fluid-sticky-right').forEach((el) => {
        el.style.marginLeft = distanceFromWindow + 'px';
        el.style.paddingLeft = paddingOneSide + 'px';
      });
    }
  } else {
    // Reset margins and padding when screen width is greater than 767px
    document.querySelectorAll('.container-fluid-sticky-left').forEach((el) => {
      el.style.marginRight = '';
      el.style.paddingRight = '';
    });

    document.querySelectorAll('.container-fluid-sticky-right').forEach((el) => {
      el.style.marginLeft = '';
      el.style.paddingLeft = '';
    });
  }
}

// Initial call to the function
containerFluidder_matchMedia();

// Add event listener to window resize and call containerFluidder_matchMedia
window.addEventListener('resize', containerFluidder_matchMedia);
