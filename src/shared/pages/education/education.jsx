import React, { Component } from 'react';
import LessonCard from './lessonCard';

import { lessons } from 'assets/data/mockup_lessons';
import { levels } from 'assets/data/mockup_levels';
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import 'assets/css/style.css';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sampleData: lessons
         }
    }
    displayLessonsByLevels(){
        console.log(levels)
        let list = [];
        levels.forEach( level => 
            list.push(
                <div>
                    <span>{level}</span>
                    {this.displayLessons(level)}
                </div>
                )
            )
        return list;
    }

    displayLessons(level) {
        let list = [];
        this.state.sampleData.filter((item) => item.level === level).map((item, index) => {
            list.push(
                <div id={item.id}>
                    <LessonCard video= {item}/>
                </div>
            );
        })
        return list;
    }

    render() { 
        return (
        <div>
            <div className="header">
                    Lesson Plan
                    <i className="score fa fa-star">&nbsp;36</i>
                <FontAwesomeIcon icon="check-square" />
            </div>
            <div className="content">
                {this.displayLessonsByLevels()}
            </div>
        </div>
        );
    }
}
 
export default Education;