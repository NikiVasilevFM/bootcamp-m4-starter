import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    state = {
        title: '',
    }
    render() { 
        return (
            <div className="favorites">
                <input className="favorites__name" placeholder="Введите название списка" value={this.state.title}/>
                <ul className="favorites__list">
                    {this.props.movies.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year}) 
                        <button onClick={() => this.props.del(item)}>X</button>
                        </li>;
                    })}
                </ul>
                <button type="button" className="favorites__save" disabled>Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;