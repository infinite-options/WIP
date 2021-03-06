import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Paper, Typography } from "@material-ui/core";

import styles from "./home.module.css";

class InVenue extends React.Component {
  render() {
    return (
      <div className={styles.venueInfo}>
        <Paper className={styles.venueInfoButton}>
        <Typography variant='subtitle1' style={{fontSize:'1.2rem'}}>
            {" "}
            In Venue{" "}
          </Typography>
          <Typography variant='body1'>
            {" "}
            {isNaN(this.props.inVenue) ? "" : this.props.inVenue}{" "}
          </Typography>
        </Paper>
      </div>
    );
  }
}

InVenue.propTypes = {
  inVenue: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  inVenue: state.venueData.inVenue,
});

export default connect(mapStateToProps, {})(InVenue);
