
(function () {
  function activate(buttons, activeButton) {
    buttons.forEach(function (button) {
      button.classList.toggle('is-active', button === activeButton);
    });
  }

  var frequencyButtons = Array.prototype.slice.call(document.querySelectorAll('[data-give-frequency]'));
  var frequencyLabel = document.querySelector('[data-frequency-label]');
  frequencyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      activate(frequencyButtons, button);
      if (frequencyLabel) frequencyLabel.textContent = button.textContent.trim();
    });
  });

  var amountButtons = Array.prototype.slice.call(document.querySelectorAll('[data-give-amount]'));
  var giftSummary = document.querySelector('[data-gift-summary]');
  amountButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      activate(amountButtons, button);
      if (giftSummary) giftSummary.textContent = button.getAttribute('data-give-amount');
    });
  });

  var pathwayCards = Array.prototype.slice.call(document.querySelectorAll('[data-pathway]'));
  var pathwaySelect = document.getElementById('interest-pathway');
  pathwayCards.forEach(function (button) {
    button.addEventListener('click', function () {
      activate(pathwayCards, button);
      if (pathwaySelect) pathwaySelect.value = button.getAttribute('data-pathway');
      var form = document.getElementById('interest-form');
      if (form && window.innerWidth < 768) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.faq-accordion').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.setAttribute('role', 'button');
    question.setAttribute('tabindex', '0');
    function toggle() { item.classList.toggle('is-open'); }
    question.addEventListener('click', toggle);
    question.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); }
    });
  });
})();
