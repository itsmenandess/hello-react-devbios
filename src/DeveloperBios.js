import React from 'react';

function DeveloperBios(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h3 className="card-title bold">{props.developer.firstName} {props.developer.lastName}'s Bio</h3>
                <p className="card-text">
                    <span className="bold">Favorite Programming Language: </span>{props.developer.favoriteLanguage}
                </p>
                <p className="card-text">
                    <span className="bold">Year Started: </span>{props.developer.yearStarted}
                </p>
            </div>
        </div>
    );
}

export default DeveloperBios;

