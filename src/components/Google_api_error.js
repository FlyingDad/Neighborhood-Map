import React from "react";

const GoogleApiError = props => {
  return (
    <div className="google-api-error">
      <h1>An error was detected loading Google Maps</h1>
      <p>Please verify your internet connection and try again.</p>
    </div>
  );
};

export default GoogleApiError;
