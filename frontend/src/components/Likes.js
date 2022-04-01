import React from 'react';
import {connect} from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import itinerariesActions from '../redux/actions/itinerariesActions';
import {useParams} from 'react-router-dom';
import swal from 'sweetalert';

function Likes(props){

    const {id} = useParams()
    
    async function likesOrDislikes() {
        await props.likesAndDislikes(props.id)

        props.setReload(!props.reload)
    }

    const userNotLogued = () => {
        swal("Sorry!", "You have to be logued in to like this itinerary!");
      }
    return(
        <>
        <div>
        {props.user ?
            (<button onClick={likesOrDislikes} className='likesButton'>{props?.likes.includes(props.user.id) ?
                
            <span style={{color: "red", fontSize: 30}}> <FavoriteIcon/> </span> :
            <span style={{fontSize: 30}}> <FavoriteBorderIcon/> </span>}</button>)

            : (<button onClick={userNotLogued} className='likesButton'><span style={{fontSize: 30}}> <FavoriteBorderIcon/> </span></button>)}
        </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}

const mapDispatchToProps = {
    likesAndDislikes: itinerariesActions.likesAndDislikes,
    fetchOneItinerary: itinerariesActions.fetchOneItinerary,
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
