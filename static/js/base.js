document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Show a 'Coming soon' notification when a tag without a link is clicked
  $comingSoonNotification = document.getElementById('coming-soon-notification');
  $notificationTimeout = setTimeout(function () {
    $comingSoonNotification.style.display = 'none';
  }, 5000);
  (document.querySelectorAll('a:not([href])') || []).forEach(($noLinkTag) => {
    $noLinkTag.addEventListener('click', () => {
      window.clearTimeout($notificationTimeout);
      $comingSoonNotification.style.display = 'block';
      $notificationTimeout = setTimeout(function () {
        $comingSoonNotification.style.display = 'none';
      }, 5000);
      return false;
    });
  });

  // Hide notification when clicking the close button
  (document.querySelectorAll('.notification .delete') || []).forEach(($button) => {
    $button.addEventListener('click', () => {
      $comingSoonNotification.style.display = 'none';
    });
  });
});
