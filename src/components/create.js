import React, { Component } from 'react';
import axios from "axios"; //gives us the ability to talk HTML(needed to process POST html requests)

// Class for the home page of the navbar containing the content of the component
class Create extends Component {
    constructor() {
        super();
        //Binding events to constructor. It is required to perform handleSubmit and OnChange
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        //Assigning local variables from the state
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    handleSubmit(event) {
        console.log("Name: " + this.state.Title +
            " Year: " + this.state.Year +
            "Poster: " + this.state.Poster);

        //when submitted, it assigned the entered values to local variables
        const NewMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster
        }
        //This handles posting to the local variables to the server
        axios.post('http://localhost:4000/api/movies', NewMovie)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err)
            })
        //stop this method from being run when not called
        event.preventDefault();

        //setting the state
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        });
    }
    //update the state with the new name
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }
    //update the state with the new name
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }
    //updat the state with the new poster
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>This is my Create Component!</h1>
                {/* When submitted, run this method */}
                <form onSubmit={this.handleSubmit}>

                    {/* Creating form input controls */}
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            //value is equal to the state of the component
                            value={this.state.Title}
                            // Every time a change is submitted, it updates the state (allows text into the box)
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="text"
                            className="form-control"
                            //value is equal to the state of the component
                            value={this.state.Year}
                            // Every time a change is submitted, it updates the state (allows text into the box)
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            //value is equal to the state of the component
                            value={this.state.Poster}
                            // Every time a change is submitted, it updates the state (allows text into the box)
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add Movie"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;