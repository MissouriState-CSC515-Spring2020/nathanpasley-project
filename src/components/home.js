import React, { Component } from 'react';

const API = 'AIzaSyAT-j6pXcvc6fJOKNYPNWrxdOA2n3DzCQQ';
const channelID = 'UC6nSFpj9HTCZ5t-N3Rm3-HA';
const result = 5;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAT-j6pXcvc6fJOKNYPNWrxdOA2n3DzCQQ&channelId=UC6nSFpj9HTCZ5t-N3Rm3-HA&part=snippet,id&order=date&maxResults=5

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Home extends Component {

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
                    <h1>VSauce Videos</h1>
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

export default Home;