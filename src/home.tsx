import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <>
        <div className="text-bg-secondary p-3">
          <h1>Joel Hilton's Movie Collection Site</h1>
          <img
            src={process.env.PUBLIC_URL + 'JoelHiltonHeadshot (1).jpg'}
            alt="Joel"
          ></img>
        </div>
      </>
    );
  }
}

export default Welcome;
