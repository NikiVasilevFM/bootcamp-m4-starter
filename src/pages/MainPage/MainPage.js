import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import { loadList } from '../../api.js';

class MainPage extends Component {

    state = {
        movies: [],
        favorites: []
    }

    loadMovies = (query) => {
        loadList(query).then((list)=>{
            this.setState({movies:list})
        })
    }

    addToFav = (movie) => {
        const alreadyExists = this.state.favorites.find((el)=> {
            return el.imdbID === movie.imdbID
        })
        if(alreadyExists) {
            return
        }

        const newFav = [...this.state.favorites, movie];
        this.setState({favorites:newFav});
    }

    delFromFav = (movie) => {
        const delFav = this.state.favorites.filter((el) => {
            return el.imdbID !== movie.imdbID
        });
        this.setState({favorites:delFav});
    }

    render() { 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox search={ this.loadMovies}/>
                        </div>
                        <div className="main-page__movies">
                            <Movies movies={this.state.movies} addFav={this.addToFav}/>
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites movies={this.state.favorites} del={this.delFromFav}/>
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;