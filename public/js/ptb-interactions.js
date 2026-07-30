
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

  /* Three pillars cursor-follow image previews. */
  var pillarCards = Array.prototype.slice.call(
    document.querySelectorAll('.ptb-vision-pillars .tools-card')
  );

  if (pillarCards.length && window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 992px)').matches) {
    var activePillarCard = null;
    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var animationFrame = null;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function positionPillarImage(card, clientX, clientY, immediate) {
      var image = card && card.querySelector('.tools-image');
      if (!image) return;

      var rect = image.getBoundingClientRect();
      var imageWidth = rect.width || Math.min(window.innerWidth * 0.27, 448);
      var imageHeight = rect.height || Math.min(window.innerWidth * 0.19, 304);
      var gap = 28;
      var edge = 20;

      targetX = clamp(clientX + gap, edge, window.innerWidth - imageWidth - edge);
      targetY = clamp(clientY - imageHeight * 0.5, edge, window.innerHeight - imageHeight - edge);

      if (immediate) {
        currentX = targetX;
        currentY = targetY;
      }
    }

    function renderPillarImage() {
      if (!activePillarCard) {
        animationFrame = null;
        return;
      }

      var image = activePillarCard.querySelector('.tools-image');
      if (!image) {
        animationFrame = null;
        return;
      }

      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      var rotation = getComputedStyle(image).getPropertyValue('--ptb-pillar-image-rotation').trim() || '-5deg';
      image.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0) rotate(' + rotation + ') scale(1)';
      animationFrame = requestAnimationFrame(renderPillarImage);
    }

    pillarCards.forEach(function (card) {
      card.addEventListener('mouseenter', function (event) {
        pillarCards.forEach(function (otherCard) {
          if (otherCard !== card) otherCard.classList.remove('is-pillar-hovered');
        });

        activePillarCard = card;
        positionPillarImage(card, event.clientX, event.clientY, true);
        card.classList.add('is-pillar-hovered');

        if (!animationFrame) animationFrame = requestAnimationFrame(renderPillarImage);
      });

      card.addEventListener('mousemove', function (event) {
        if (activePillarCard === card) {
          positionPillarImage(card, event.clientX, event.clientY, false);
        }
      });

      card.addEventListener('mouseleave', function () {
        var image = card.querySelector('.tools-image');
        card.classList.remove('is-pillar-hovered');
        if (image) {
          image.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0) rotate(var(--ptb-pillar-image-rotation, -5deg)) scale(.94)';
        }
        if (activePillarCard === card) activePillarCard = null;
      });
    });

    window.addEventListener('blur', function () {
      pillarCards.forEach(function (card) {
        card.classList.remove('is-pillar-hovered');
      });
      activePillarCard = null;
    });
  }

})();
