import React from 'react';
import {format} from 'date-fns';
import axios from 'axios';
import { API_KEY, url } from "../../../../../../../config/config.js";





class UserInfo extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            reportActive: true,
            helpfulActive: true
        }
    }

    sendHelpful () { // refactor to correct add
        if (this.state.helpfulActive) {
            let newAxios = axios.create({
                headers : {'Authorization' : API_KEY}
           })
            let endPoint = `${url}/qa/answers/${this.props.data.id}/helpful`;
            newAxios.put(endPoint, {
                params: {
                    answer_id:this.props.data.id,
                }
            })
            .then((res) => {
                this.state.helpfulActive = false;
                this.setState(JSON.parse(JSON.stringify(this.state)));
            })
            .catch((err) => {
                console.error("err in helpful marking userInfo", err)
            })
        }
    }

    sendReport () { // refactor to correct add
        if (this.state.reportActive) {
            let endPoint = `${url}/qa/answers/${this.props.data.id}/report`;
            let newAxios = axios.create({
                headers : {'Authorization' : API_KEY}
            })
            newAxios.put(endPoint, {
                params: {
                    answer_id:this.props.data.id,
                }
            })
            .then((res) => {
                this.state.reportActive = false;
                this.setState(JSON.parse(JSON.stringify(this.state)));
            })
            .catch((err) => {
                console.error("err in repoprting ", err)
            })
        }
    }


    render() { //&nbsp; is a whitespace character

        let theDate = new Date(this.props.data.date.substr(0,4), String(parseInt(this.props.data.date.substr(5,2)-1)),  this.props.data.date.substr(8,2) )
        let user = <p className="user-info">by {this.props.data.answerer_name} - {format(theDate ,'MMMM d, Y')}</p>
        let yesData = this.state.helpfulActive ? this.props.data.helpfulness : this.props.data.helpfulness + 1
        let reportedData = this.state.reportActive ? 'Report' : 'Reported'
        let yes  = <p className="helpful-event" onClick={this.sendHelpful.bind(this)} >Yes ({yesData})</p>
        let report = <p className="report-event"  onClick={this.sendReport.bind(this)}> {reportedData} </p>

        return(
            <div className="user-tab"> {user}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Helpful? {yes}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{report}</div>)
    }

}


export default UserInfo;