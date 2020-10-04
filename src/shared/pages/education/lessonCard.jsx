import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import 'assets/css/style.css';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import * as img from 'assets/images/lessons/accounting.jpg';
import 'assets/css/style.css';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


  viewLesson = () => {
    const history = useHistory;
    console.log(this.props.video.id)
    history.push(`/education/${this.props.video.id}`)
  }

    render() { 
      let progress = this.props.video.progress;
        return (
          <div>
            <Card className="card" onClick={() => this.viewLesson()}>
              
              <CardImg left width="20%" src={img} alt="Card image cap" />
              <CardBody className="cardBody">
                <CardTitle>{this.props.video.title}</CardTitle>
                <StarRatingComponent name="rating"  starCount={5}  value={this.props.video.rating} /> <br/>
                {this.props.video.progress !== 0 && (
                  <div>
                    Progress:
                    <progress id="file" value={this.props.video.progress} max="100" style={{float: 'right'}}> </progress>
                  </div> )
                  }
              </CardBody>
            </Card>
          </div>
        );
    }
}
 
export default LessonCard;

