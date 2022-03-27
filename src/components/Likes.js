import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import itinerariesActions from '../redux/actions/itinerariesActions';
import userActions from '../redux/actions/userActions';
import {useParams} from 'react-router-dom';
import swal from 'sweetalert';

function Likes(props){

    const {id} = useParams()
    /* const [itinerary, setItinerary] = useState() */
    

   /*  useEffect(()=>{
        props.fetchOneItinerary(id)
            .then(response => setItinerary(response.data.response.itinerary))
    }, [reload]) */
    
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
            (<button onClick={likesOrDislikes}>{props?.likes.includes(props.user.id) ?
                
            <span style={{color: "red", fontSize: 30}}> <FavoriteIcon/> </span> :
            <span style={{fontSize: 30}}> <FavoriteBorderIcon/> </span>}</button>)

            : (<button onClick={userNotLogued}><span style={{fontSize: 30}}> <FavoriteBorderIcon/> </span></button>)}
        <h3 style={{color: "black", fontSize: 30}}>{props?.likes.length}</h3>
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

/* import React, {useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { connect } from 'react-redux';

const Likes = (props) => {
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0)

    const likesChanger = () => {
        if(isLiked){
            setIsLiked(true)
            setLikes(likes + 1)
        }   */
           /*  setIsLiked(false)
            setLikes(likes - 1) */
            /* if(isDisliked){
                setIsDisliked(false)
                setLikes(likes + 1)
                setDislikes(dislikes - 1)
            } */
        /* } */
    /* }

    const dislikesChanger = () =>{
        if(isDisliked){
            setIsDisliked(true)
            setDislikes(dislikes + 1)
        } */
        /* }else{
            setIsDisliked(true)
            setDislikes(dislikes + 1)
            if(isLiked){
                setIsLiked(false)
                setDislikes(dislikes + 1)
                setLikes(likes - 1)
            }
        } */
  /*   } */

    /* const likesAndDislikes = async() => {
        console.log(user);
        await axios.put(`http://localhost:4000/api/likes&dislikes/${user.id}`)
        .then(response => console.log(response))
    } */
   /*  console.log(props);

   /* const likeDislike = async() =>{
        const token = localStorage.getItem("token")
        console.log(props)
        console.log(token)
        await axios.put(`http://localhost:4000/api/likes&dislikes/${props.id}`,{},{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => console.log(response))
    } */
    
   /*  return (
        <>
        <div>
            <div>
                {isLiked === true ? (<button onClick={likesChanger}> <FavoriteIcon/> </button>) : <button onClick={dislikesChanger}> <FavoriteBorderIcon/> </button>
                }
                <span>{likes} {dislikes}</span>
                
            </div>
        </div>
        </>
    ); */

/* const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
} */

/* const mapDispatchToProps = {
    
} */

/* export default connect(mapStateToProps, null)(Likes); */