const chaiAsPromised = require('chai-as-promised');
const chai = require('chai');

require('ignore-styles');
require('babel-polyfill');
require('babel-register')({
  plugins: ['babel-plugin-rewire']
});

chai.use(chaiAsPromised);
global.expect = chai.expect;
