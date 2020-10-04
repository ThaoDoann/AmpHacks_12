import React, { Component } from 'react';
import LessonCard from './lessonCard';

import { lessons } from 'assets/data/mockup_lessons';
import { Row, Col } from "reactstrap";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sampleData: lessons
         }
    }

    viewLesson = () => {
        console.log(this.props.video.id)
    }

    displayLessons() {
        let videoLists = [];
        this.state.sampleData.map((item, index) => {
            videoLists.push(
                <div id={item.id} onClick={() => this.viewLesson()}>
                    <LessonCard video= {item}/>
                </div>
            );
        })
        return videoLists;
    }

    render() { 
        return (
        <div>
            <h2>Lesson Plan</h2>
                {this.displayLessons()}
        </div>
        );
    }
}
 
export default Education;