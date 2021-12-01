import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderDirectoryItem({ campsite, deleteFavorite }) {
    return (
        <Media tag="li">
            <Media left middle>
                <Media object src={baseUrl + campsite.image} alt={campsite.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{campsite.name}</Media>
                <p>{campsite.description}</p>
                <Button outline color="danger" onClick={() => deleteFavorite(campsite._id)}>
                    <i className="fa fa-times" />
                </Button>
            </Media>
        </Media>
    );
}

const Favorites = props => {

    if (props.favorites.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.favorites.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    if (props.favorites.favorites && props.favorites.favorites.campsites.length > 0) {
        const favorites = props.favorites.favorites.campsites.map(campsite => {
            return (
                <div key={campsite._id} className="col-12 mt-5">
                    <RenderDirectoryItem campsite={campsite} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <Media list>
                        {favorites}
                    </Media>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <h4>You have no favorites selected.</h4>
                </div>
            </div>
        )
    }
}

export default Favorites;