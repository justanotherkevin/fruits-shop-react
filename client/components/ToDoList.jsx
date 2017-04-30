import React from 'react';
import EachItem from './EachItem.jsx'

export default class ToDoList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Task</th>
            <th>Action</th>
            <EachItem/>
          </tr>
        </tbody>
      </table>
    );
  }
}
