import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import userActions from '../redux/actions/userActions';
import userReducer from '../redux/reducers/userReducer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Likes(props){
    
    const likeDislike = async() =>{
        const token = localStorage.getItem("token")
        console.log(props)
        console.log(token)
        await axios.put(`http://localhost:4000/api/likes&dislikes/${props.id}`,{},{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => console.log(response))
    }
    likeDislike()

    return(
        <>
        <button onClick={likeDislike}> <FavoriteBorderIcon/> </button>
        <span>00</span>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        itineraries: state.itinerariesReducer.itineraries
    }
}

export default connect(mapStateToProps, null)(Likes);

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

    return (
        <>
        <div>
            <div>
                {isLiked === true ? (<button onClick={likesChanger}> <FavoriteIcon/> </button>) : <button onClick={dislikesChanger}> <FavoriteBorderIcon/> </button>
                }
                <span>{likes} {dislikes}</span>
                
            </div>
        </div>
        </>
    );
}
 */
/* const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
} */

/* const mapDispatchToProps = {
    
} */

/* export default connect(mapStateToProps, null)(Likes); */