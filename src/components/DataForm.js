import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const DataForm = props => {
  // const []
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <>
      {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button id="hidethis" onClick={handleGetData}>Reset Data</button>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(DataForm);
