import React, {Component} from 'react';
import MoviePanel from './MoviePanel.js'

class MoviePanelList extends Component{
  constructor(props){
    super(props);
    this.moviesUsers = {};

    props.profiles.forEach((profile)=>{
      if(this.moviesUsers[profile.favoriteMovieID]){
        this.moviesUsers[profile.favoriteMovieID].push(profile.userID);
      }else{
        this.moviesUsers[profile.favoriteMovieID] = [profile.userID];
      }
    })
  }

  render(){
    const {movies, users} = this.props
    const moviePanels = Object.keys(movies).map((movieID)=>
                          (<MoviePanel key={movieID}
                                       movieName={movies[movieID].name}
                                       users={users}
                                       likedBy={this.moviesUsers[movieID]}
                          />)
                        )

    return moviePanels;
  }
}

export default MoviePanelList;