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
    const {comment, itinerary, deletingComment, modifiedComment, setModify} = props



   /*  async function deleteComment(event) {
        await props.deleteComment(event.target.id)
        setReload(!reload)
    }
 */
    
  
    const userNotLogued = () => {
      swal("Sorry!", "You have to log in in order to comment!");
    }

    return(
     <div>
               
                
                    {comment.userId?._id !== props.user?.id ?
                        <Card sx={{ minWidth: 275 }} key={comment._id}>
                        <CardContent>
                        <img className="userPhotoComment" src={comment.userId?.photoURL} alt="User account avatar" />
                            <Typography variant="h5" component="div">
                                {comment.userId?.firstName+comment.userId?.lastName}
                            </Typography>
                            <Typography variant="body2">
                                {comment.comment}
                            </Typography>
                        </CardContent>
                        </Card>
                        :

                        <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {comment.userId.photoURL+comment.userId.firstName+comment.userId.lastName}
                            </Typography>
                            <Typography variant="body2">
                            <TextareaAutosize
                                type="text"
                                maxRows={4}
                                aria-label="maximum height"
                                placeholder="Comment"
                                defaultValue={comment.comment}
                                onChange={(event) => setModify(event.target.value)}
                                style={{ width: 200 }}
                            />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button id={comment._id} onClick={modifiedComment} size="small">Edit</Button>
                            <Button id={comment._id} onClick={deletingComment} size="small">Delete</Button>
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

  {/* <div class="card mb-3 cardDetail"  >
        <div class="accordion" id={itinerary?.name}>
          <div class="accordion-item"> */}
            {/* <h2 class="accordion-header " id={"heading" + itinerary?.name}>
              <button class="accordion-button collapsed acordion " type="button" data-bs-toggle="collapse" data-bs-target={"#" + place?.name.replace(/ /g, "").slice(0, 5)} aria-expanded="false" aria-controls={place?.name.replace(/ /g, "").slice(0, 5)}>
                Comentarios
                <span class="material-icons ml-auto arrow collapsed " data-bs-toggle="collapse" aria-controls={place?.name.replace(/ /g, "").slice(0, 5)} data-bs-target={"#" + place?.name.replace(/ /g, "").slice(0, 5)}>
                  keyboard_arrow_down
                </span>
              </button>
            </h2> */}
          {/*   <div id={place?.name.replace(/ /g, "").slice(0, 5)} class="accordion-collapse collapse " aria-labelledby={"heading" + place?.name} data-bs-parent={"#" + place?.name}>
              <div class="accordion-body  "> */}

 {/*   {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button onClick={cargarComentario} class="btn btn-primary">Cargar</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1>
                } */}
             {/*  </div>
            </div>
          </div>
        </div>
      </div> */}