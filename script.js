document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      console.log('Dropdown toggle clicked!');
      e.preventDefault(); // Prevent the default behavior of the link
      // Toggle the dropdown
      toggle.classList.toggle('open');
      toggle.nextElementSibling.classList.toggle('open');
    });
  });