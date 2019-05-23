import React from "react"

const scheduleTitle = {
  color: '#222222',
  textTransform: 'uppercase',
  fontWeight: '800'
}

const Schedule = () => (
  <div>
    <h1 style={scheduleTitle} className="uk-heading-hero">Schedule</h1>
    <div className="uk-grid uk-grid-match uk-child-width-expand@s">
      <div>
        <div className="uk-card uk-card-default uk-card-body">
          <h2 className="uk-card-title">Thursday</h2>
          <p>5:00pm -	Registration Open</p>
          <p>7:00pm -	Session 1</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-body uk-card-default">
          <h2 className="uk-card-title">Friday</h2>
          <p>8:00am - Breakfast</p>
          <p>9:00am - Session 2</p>
          <p>10:30am -	Break</p>
          <p>10:45am - Workshop 1</p>
          <p>11:45am - Lunch</p>
          <p>1:00pm - Workshop 2</p>
          <p>2:00pm - Session 3</p>
          <p>5:30pm - Dinner</p>
          <p>7:00pm - Session 4</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-body uk-card-default">
          <h2 className="uk-card-title">Saturday</h2>
          <p>8:00am - Breakfast</p>
          <p>9:00am - Session 5</p>
          <p>10:30am -	Break</p>
          <p>11:45am	- Lunch To Go</p>
        </div>
      </div>
    </div>
  </div>
)



export default Schedule
