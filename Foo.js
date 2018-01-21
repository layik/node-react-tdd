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
