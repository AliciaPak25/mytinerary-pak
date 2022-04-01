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
import "../styles/stylesActivities.css"

const ActivitiesCards = (props) => {
    
    const [activities, setActivities] = useState([])

    useEffect(()=>{
        props.activityPerItinerary(props.id).then(res=>setActivities(res.response))
    },[])

    return (
        <div className="CardActivities">
            {activities.length ?activities.map(activity=>
              <div className="card text-white cardActivity" key={activity._id}>
              <img src={process.env.PUBLIC_URL+`/assets/activities/${activity.activityImage}`} className="card-img imageActivity" alt="activity"/>
              <div className="card-img-overlay">
                <h5 className="card-title nameOfActivity">{activity.activityName}</h5>
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