var ask = require('./ask');

/**
* @author L Hama
* Basic index entry
* This is not a package to renter anythign on browser.
* It is a Node package only for testing
* ReactJS components.
*/
'use-strict'

console.log(`
  Hello! TDD again.
  There is one React component called Foo in this repo.
  There is also an ask function which reads from the commandline.
  The aim is to learn the testing environemnt/tools.s

  It renders a single <p> element:

  //Foo.js
  import React from 'react';

  class Foo extends React.Component {
    componentDidMount() {
      console.log("componentDidMount");
    }
    render() {
      return (
        <p>Hello Foo!</p>
      );
    }
  }

  export default Foo;

`);

ask('are you happy?')
  .then(function (reply) {
    console.log('user replied', reply);
  })
  .finally(process.exit);
