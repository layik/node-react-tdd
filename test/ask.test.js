var ask = require('../ask');

const answer = 'yes';
describe('ask - ', function () {
  var stdin;
  beforeEach(function () {
    stdin = require('mock-stdin').stdin();
  });
  it('asks a question', function () {
    process.nextTick(function mockResponse() {
      stdin.send(answer);
    });
    return ask('Do you like JS? Answer: ' + answer)
      .then(function (response) {
        console.assert(response === answer);
      });
  });
});
