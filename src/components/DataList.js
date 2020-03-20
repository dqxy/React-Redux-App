import React from "react";
import { connect } from "react-redux";
import AddQuote from "./AddQuote";

const DataList = props => {
 // document.getElementById("hidethis").style.display = 'none';
  return (
    <>
    <AddQuote/>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.data.map(d => <div class="data">{d.en} <br/> {d.author}</div>)
      )}
      
    </>
  );
  
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(DataList);
