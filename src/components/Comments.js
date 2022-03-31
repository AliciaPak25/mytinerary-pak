import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import commentsActions from '../redux/actions/commentsActions';
import userActions from '../redux/actions/userActions';
import {connect} from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import itinerariesActions from '../redux/actions/itinerariesActions';
import swal from 'sweetalert';
import '../styles/stylesComments.css'

const Comments = (props) => {
    const {id} = useParams()
    const [reload, setReload] = useState(false)
    const [editing, setEditing] = useState(false)
    const {comment, itinerary, deletingComment, modifiedComment, setModify} = props

  const modifyingComment = (event) => {
    if(editing){
      setEditing(false)
      modifiedComment(event)
    }else{
      setEditing(true)
    }
  }


    return(
     <div>
               
                
                    {comment.userId?._id !== props.user?.id ?
                        <Card sx={{ minWidth: 275 }} key={comment._id}>
                        <CardContent>
                        <img className="userPhotoComment" src={comment.userId?.photoURL} alt="User account avatar" />
                            <Typography variant="h5" component="div">
                                {comment.userId?.firstName+ " " +comment.userId?.lastName}
                            </Typography>
                            <Typography variant="body2">
                                {comment.comment}
                            </Typography>
                        </CardContent>
                        </Card>
                        :

                        <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                        <img className="userPhotoComment" src={comment.userId?.photoURL} alt="User account avatar" />
                            <Typography variant="h5" component="div">
                                {comment.userId.firstName+ " " +comment.userId.lastName}
                            </Typography>
                            <Typography variant="body2">
                            {!editing ? 
                            (
                            <Typography variant="body2">
                                {comment.comment}
                            </Typography>
                            ) :
                              <TextareaAutosize
                              type="text"
                              maxRows={4}
                              aria-label="maximum height"
                              placeholder="Comment"
                              defaultValue={comment.comment}
                              onChange={(event) => setModify(event.target.value)}
                              style={{ width: 200 }}
                              />
                            }
                            </Typography>
                        </CardContent>
                        <CardActions className='commentsButtons'>
                            <Button id={comment._id} onClick={modifyingComment} size="small" className='commentButton'>{!editing ? ("Edit") : "Confirm"}</Button>
                            {editing ?
                            (<Button id={comment._id} onClick={()=> setEditing(false)} size="small" className='commentButton'>Cancel</Button>) :
                            <Button id={comment._id} onClick={deletingComment} size="small" className='commentButton'>Delete</Button>
                          }
                            
                        </CardActions>
                        </Card>
                    }
            
                
                
                
            </div>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    modifyComment: commentsActions.modifyComment,
    deleteComment: commentsActions.deleteComment,
    fetchOneItinerary: itinerariesActions.fetchOneItinerary
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

//word-break: break-all;