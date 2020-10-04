import React, { Component } from 'react';
import { useHistory, Link } from "react-router-dom";
import * as src from "assets/images/lessons/accounting.jpg";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import { Button } from 'react-bootstrap';
import "assets/css/style.css";


class LessonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    async componentDidMount() {
        console.log(this.props)
        // if (!this.props.video.id)
        //     this.props.history.push(`/education`)
    }

    render() { 
        return (
            <div className="content">
                <div className="lessonPageHeader">
                    <div className="headerWrapper">
                        <Link to={'/education'} className="backButton"><i class="fa fa-chevron-left"></i></Link>
                        <div className="videoTitle">Introdction to finance</div>
                    </div>
                    <video width="100%" height="auto" poster={src} controls preload="none" className="lessonVideo">
                        <source src="https://www.youtube.com/watch?v=wvXDB9dMdEo" type="video/mp4"></source>
                    </video>
                </div>

                <Card className="card">
                    {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                    <CardBody>
                        <div className="lessonContent"> 
                        <h3>What is Finance? </h3>
                        <p>Finance is a broad subject, and financial decisions are all around us. Whether you work on Wall Street or in a small company, finance is vital to every business. Therefore, understanding the fundamentals of finance is vital to your business education. This introductory unit addresses fundamental concepts of finance, stocks, and bonds. Also, Unit 1 exposes the importance of understanding ratios for financial statement analysis and analysis of cash flows. The main ratios explained are: solvency (or liquidity ratios), financial ratios, profitability ratios, and market value ratios. In addition, you will learn about financial growth, what financial factors determine growth, the importance of maintaining a sustainable growth rate, and how to use financial statement information to manage growth. Consider this situation: You are the manager of a small retail chain and your boss has given you the task of deciding whether to invest in a second store. You know that adding a second store means greater potential for growth. However, you also know that adding a new store will require spending cash. Facing this tough decision, how could you determine whether the company can "handle" such an investment? The answer might lie in ratio analysis. This section will explain how to use financial ratios to help you make these types of business decisions.</p>
                        <ul>
                            <li>Finance is about the bottom line of business activities.</li>
                            <li>Upon successful completion of this unit, you will be able to:</li>
                            <li>explain the primary goal of financial management;</li>
                            <li>describe how stocks and bonds function and their effect on corporate structure;</li>
                            <li>explain how financial managers use the income statement, the balance sheet, and the statement of cash flows to make better informed decisions; </li>
                            <li>compute the major financial ratios in order to evaluate a company's performance;</li>
                            <li>analyze pro-forma financial statements in order to evaluate the future performance of a company; and</li>
                            <li>prepare an analysis of a company's financial statements. </li>
                        </ul>
                        </div>

                        <Button color="primary">Quiz</Button>{' '}
                    </CardBody>
                </Card>

            </div>
         );
    }
}
 
export default LessonPage;