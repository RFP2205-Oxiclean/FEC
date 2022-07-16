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
            let endPoint = `${url}/qa/answers/${this.props.data.id}/helpful`;
            axios.put(endPoint, {
                params: {
                    answer_id:this.props.data.id,
                }
            })
            .then((res) => {
                console.log("marked answer helpful");
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
            axios.put(endPoint, {
                params: {
                    answer_id:this.props.data.id,
                }
            })
            .then((res) => {
                console.log("reported answer");
                this.state.reportActive = false;
                this.setState(JSON.parse(JSON.stringify(this.state)));
            })
            .catch((err) => {
                console.error("err in repoprting ", err)
            })
        }
    }


    render() {
        console.log()
        let theDate = new Date( this.props.data.date.substr(0,4), this.props.data.date.substr(5,2), this.props.data.date.substr(8,2) )
        let user = <p className="user-info">by {this.props.data.answerer_name} - {format(theDate ,'MMMM d, Y')}</p>
        let yes  = <p className="helpful-event" onClick={this.sendHelpful.bind(this)} >Yes ({this.props.data.helpfulness})</p>
        let report = <p className="report-event"  onClick={this.sendReport.bind(this)}> {this.state.reportActive ? 'Report' : 'Reported' } </p>

        return(
            <div className="user-tab"> {user} | Helpful? {yes} | {report}</div>)
    }

}


export default UserInfo;