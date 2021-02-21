const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

let timerId = null;

const colorSwitcher = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timerId = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      const i = randomIntegerFromInterval(min, max);
      refs.body.style.backgroundColor = colors[i];
      console.log(`стартуем`);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    console.log('стоп');
  },
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', () => {
  colorSwitcher.start();
});

refs.stopBtn.addEventListener('click', () => {
  colorSwitcher.stop();
});
