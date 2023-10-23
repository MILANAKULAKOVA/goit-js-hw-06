let counterValue = 0;

  const counter = document.getElementById('counter');
  const decrementButton = counter.querySelector('[data-action="decrement"]');
  const incrementButton = counter.querySelector('[data-action="increment"]');
  const valueElement = counter.querySelector('#value');

  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterValue();
  });

  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounterValue();
  });

  function updateCounterValue() {
    valueElement.textContent = counterValue;
  }