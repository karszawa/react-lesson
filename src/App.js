import React from 'react';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
`;

const HelpText = styled.span`
  color: gray;
  font-size: 12px;
`;

const Li = styled.li`
  list-style: none;
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h1`
`;

const TodoWrapper = styled.ul`
`;

class TodoItem extends React.Component {
  render() {
    return (
      <Li>
        <p>{ this.props.val }</p>
        <button onClick={ this.props.onRemoveButtonClick }>☓</button>
      </Li>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [ ]
    }
  }

  removeAction(index) {
    this.setState({
      todos: this.state.todos.slice(0, index).concat(this.state.todos.slice(index + 1, this.state.todos.length))
    });
  }

  addAction() {
    this.setState({
      todos: this.state.todos.concat(this.input.value)
    });

    this.input.value = "";
    this.input.focus();
  }

  render() {
    const todos = this.state.todos.map((val, index) =>
      <TodoItem key={ index } val={ val } onRemoveButtonClick={ this.removeAction.bind(this, index) } />
    );

    return (
      <AppContainer>
        <Header className="mb-40">Todo App</Header>

        <TodoWrapper className="mb-40">
          { todos.length === 0 ? <HelpText>No Items</HelpText> : todos }
        </TodoWrapper>

        <input className="mb-20" type="text" placeholder="Type todos..." ref={ (input) => { this.input = input } }/>
        <button onClick={ this.addAction.bind(this) }>Add</button>
      </AppContainer>
    );
  }
}
