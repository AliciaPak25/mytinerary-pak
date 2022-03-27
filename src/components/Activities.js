import React, {useEffect, useState} from 'react';
import activitiesActions from '../redux/actions/activitiesActions';
import activitiesReducer from '../redux/reducers/activitiesReducer';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import "../styles/stylesActivities.css";
import CircularIndeterminate from './Loading';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ActivitiesCards = (props) => {
    
    const [activities, setActivities] = useState([])

    useEffect(()=>{
        props.activityPerItinerary(props.id).then(res=>setActivities(res.response))
    },[])
    console.log(props.id)

    return (
        <div className="CardActivities">
            {activities.length ?activities.map(activity=>
              <div class="card text-white cardActivity">
              <img src={process.env.PUBLIC_URL+`/assets/activities/${activity.activityImage}`} class="card-img imageActivity" alt="activity"/>
              <div class="card-img-overlay">
                <h5 class="card-title">{activity.activityName}</h5>
              </div>
              </div>
            ): <CircularIndeterminate/>}
        </div>
      );
}

const mapStateToProps = (state) => {
    return {
        activities: state.activitiesReducer.activities,

    }
}

const mapDispatchToProps = {
    getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary,
    fetchActivities: activitiesActions.fetchActivities,
    activityPerItinerary: activitiesActions.activityPerItinerary,
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesCards);