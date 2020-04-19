require('./mocks.ts');

global.alert = () => {};

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

(function silenceYellowBox() {
  const originalError = console.error;
  const originalWarn = console.warn;

  const isYellowBox = () => Error().stack.includes('YellowBox');

  beforeEach(() => {
    console.error = (...args) => {
      if (!isYellowBox()) {
        originalError(...args);
      }
    };
    console.warn = (...args) => {
      if (!isYellowBox()) {
        originalWarn(...args);
      }
    };
  });

  afterEach(() => {
    console.error = originalError;
    console.warn = originalWarn;
  });
})();
