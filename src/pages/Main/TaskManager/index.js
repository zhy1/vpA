import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TimeLine from 'react-gantt-timeline';
import moment from 'moment';

export default class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }


  _handleClick() {
    this.setState({
      count: 1 + this.state.count
    });
  }

  render() {

    let data = [{ id: 1, start: moment('2019-10-01'), end: moment('2019-10-15'), name: 'Demo Task 1'},
      { id: 2, start: moment('2019-10-15'), end: moment('2019-11-15'), name: 'Demo Task 2' }];
    // Links :is also an array of objects that contains links between task. Each one of the object that are part of the array need to have the following compulsory fields:

    // Property	value	Descriptions
    // id	String/Number	An unique identifier for the class
    // start	String/Number	The id of the start task
    // end	String/Number	The id of the end task
    // An example of data definition:

    // let links = [{ id: 1, start: 1, end: 2 },
    //   { id: 2, start: 1, end: 3 }];
    // Once the data is define we just need to declare the component and populate it with both data providers.


    return (
      <div>
        <div>task manager~</div>
        <TimeLine data={data}
                  currentday={5000} //Day that is in the 0px horizontal
                  nowposition={5000}

                  startRow={-50}
                  dayWidth={100}
                  mode={'month'}
        />
      </div>
    );
  }
}
//links={links}
