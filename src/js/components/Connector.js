import React, {Component} from 'react';
import OpenSearchService from '../openSearch/OpenSearchService';

export default class Connector extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({url: event.target.value});
    }

    handleClick(){
        let service = new OpenSearchService(this.state.url);
        service.discover()
        .then(result => {
            this.props.connect(result);
            console.log(result);
        })
        .catch(err => console.log(err));

        this.setState({url: ""});
    }

    render(){
        return (
            <div className="sidebar-connector">
                <label htmlFor="provider-connector-url">
                    Address of the OpenSearch Description Document <br/>
                    (Collection or Product Search)
                    <input type="url" id="provider-connector-url" value = {this.state.url} onChange = {this.handleChange}/>
                    <div className="eoos-provider-go" onClick = {this.handleClick}></div>
                </label>
            </div>
        )
    }
}