import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import PaidIcon from '@mui/icons-material/Paid';
import { PriceChange } from '@mui/icons-material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Likes from './Likes';
import ActivitiesCards from '../components/Activities';
import {connect} from 'react-redux';
import activitiesActions from '../redux/actions/activitiesActions';
import itinerariesActions from '../redux/actions/itinerariesActions';
import commentsActions from '../redux/actions/commentsActions';
import Comments from './Comments';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
import {useParams} from 'react-router-dom';

const PriceItinerary = ({itinerary, reload, setReload, addComment, modifyComment, deleteComment, user, itineraries, setItineraries}) => {
    const {id} = useParams()
    const [expanded, setExpanded] = React.useState(false);
    const [inputText, setInputText] = useState()
    const [modify, setModify] = useState()

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
      }));

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const price = []
    for (let index = 0; index < itinerary.price; index++) {
        price.push(index)
        
    }
    
    async function newComments(event) {
      const commentData = {
          itinerary: itinerary._id,
          comment: inputText
      }
      await addComment(commentData)
          .then(response => setItineraries(response.data.response.newComment), setInputText(""))
      setReload(!reload)
    }

    function deletingComment(event) {
      console.log(event.target.id);
      swal({
        title: "Are you sure you want to delete this comment?",
        text: "Once deleted, this action can't be undone!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your comment has been removed!", {
            icon: "success",
          })
          deleteComment(event.target.id).then(res=> {
            if(res.data.success){
              setItineraries(res.data.response.deleteComment.comments)
              setReload(!reload)
            }
          })
        } else {
          swal("Your comment is safe!");
        }
      });
      
  }

    async function modifiedComment(event) {
      await modifyComment(event.target.id, modify)
      setReload(!reload)
    }

    const userNotLogued = () => {
      swal("Sorry!", "You have to be logued in in order to comment!");
    }

    return(
        <div className="container" key={itinerary._id}>
      <div className="cardItineraryToSee">
        <div className="card__head"></div>
        <div className="card__userPic">
          <img src={process.env.PUBLIC_URL+`/assets/itineraries/${itinerary.image}`} alt="Users" />
        </div>
        <div className="card__body">
          <h3 className="body__title">{itinerary.name}</h3>
          <p className="body__content">
            {itinerary.hashtag1} {itinerary.hashtag2} {itinerary.hashtag3} {itinerary.hashtag4}
          </p>

          <div className="body__buttons">
            <div className="body__button">
              <Likes likes = {itinerary.likes} id={itinerary._id} setReload={setReload} reload={reload}/>
              <i>Likes: {itinerary?.likes.length}</i>
              <box-icon
                color="red"
                type="solid"
                border="square"
                name="heart"
              ></box-icon>
            </div>
            <div className="body__button">
              <i>Duration: {itinerary.duration}</i>
              <box-icon
                color="blue"
                border="square"
                name="comment-detail"
              ></box-icon>
            </div>
            <div className="body__button">
                <div className='d-flex'>{price.map(pay=> <PaidIcon className='text-success'/>)}</div>
              <box-icon
                color="green"
                name="share-alt"
                type="solid"
                border="square"
              ></box-icon>
            </div>
          </div>
              <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  >
                  {!expanded &&
                  <Button variant="contained" color="success">
                      View More  <ExpandMoreIcon />
                  </Button>
                  }
              </ExpandMore>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <ActivitiesCards id={itinerary._id} />
                  
                  {itinerary?.comments.map(comment=>
                    <Comments itinerary={itinerary} comment={comment} key={comment._id} setReload={setReload} reload={reload} deletingComment={deletingComment} modifiedComment={modifiedComment} setModify={setModify}/>
                  )}
                  
                  {user ?
                        (<CardContent>
                            <Typography variant="h5" component="div">
                                LEAVE YOUR COMMENT
                            </Typography>
                            <Typography variant="body2">
                            <TextareaAutosize
                                type="text"
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Write a comment"
                                onChange={(event) => setInputText(event.target.value)}
                                value={inputText}
                                style={{ width: 200 }}
                            />
                            </Typography>
                            <CardActions>
                                <Button onClick={newComments} size="small">Add comment</Button>
                            </CardActions>
                        </CardContent>)
                            :
                            <Card sx={{ minWidth: 275 }}>
                            <Typography variant="body2">
                            <TextField
                                disabled
                                id="outlined-disabled"
                                defaultValue="Please, log in to comment!"
                              />
                            </Typography>
                            <CardActions>
                            <Button onClick={userNotLogued} size="small">You cannot comment</Button>
                            </CardActions>
                            </Card> 
                    
                    }
                  
                  <Button variant="contained" color="success" onClick={handleExpandClick}>
                      View Less <ExpandMoreIcon />
                  </Button>
                  
              </Collapse>
        </div>
      </div>
    </div>
    );
}
const mapStateToProps = (state) => {
  return {
      activities: state.activitiesReducer.activities,
      user: state.userReducer.user,
      itineraries: state.itinerariesReducer.itineraries
  }
}

const mapDispatchToProps = {
  getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary,
  fetchActivities: activitiesActions.fetchActivities,
  addComment: commentsActions.addComment,
  deleteComment: commentsActions.deleteComment,
  modifyComment: commentsActions.modifyComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceItinerary);
