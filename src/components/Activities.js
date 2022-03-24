import React, {useEffect, useState} from 'react';
import activitiesActions from '../redux/actions/activitiesActions';
import activitiesReducer from '../redux/reducers/activitiesReducer';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import "../styles/stylesActivities.css";

const ActivitiesCards = (props) => {
    
    const [activity, setActivity] = useState([])

    useEffect(()=>{
        props.activityPerItinerary(props.id).then(res=>setActivity(res.response))
    },[])
    console.log(props.id)

    return (
        <div className="CardActivities">
            {activity.length ?activity.map(activity=>
                <div class="blog-card spring-fever">
                <div class="title-content">
                  <h3>{activity.activityName}</h3>
                  <hr />
                  <div class="intro">Description</div>
                </div>
                <div class="card-info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. 
                </div>
                <div class="utility-info">
                  <ul class="utility-list">
                    <li class="comments">12</li>
                    <li class="date">03.12.2015</li>
                  </ul>
                </div>
                <div class="gradient-overlay"></div>
                <div class="color-overlay"></div>
              </div>
            ): <h1>No tiene actividades</h1>}
            
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