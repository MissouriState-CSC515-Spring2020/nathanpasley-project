import React, { Component } from 'react';

// Uses the search (keywords) component of the API
const API = 'AIzaSyAT-j6pXcvc6fJOKNYPNWrxdOA2n3DzCQQ';
const result = 5;
const topic = "monkeys planet earth";

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=penquins&key=[YOUR_API_KEY]


var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${topic}&key=${API}`;

class Monkey extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };
    }

    getVideos() {
        fetch(finalURL)
        .then((response) => response.json())
        .then((responsJson) => {
            // console.log(responsJson);
            const resultyt = responsJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({resultyt})
            console.log(this.state.resultyt); 
        })
        .catch((error) => {
            console.error(error)
        })
    }

    componentDidMount() {
        this.getVideos();
    }

    render() {
        // console.log(finalURL);
        return (
            <div className="main container-fluid">
                <div className="page-header">
                    <h1>Monkey Videos</h1>
                </div> 
                {
                    this.state.resultyt.map((link, i) => {
                        console.log(link);
                        var frame = <div key={i} className="iframe" ><iframe className = "youtube" title= "1" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        return frame;
                    })
                }
                {this.frame}
            </div>
        );
    }
}

export default Monkey;