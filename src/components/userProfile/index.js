import React from 'react';
//import './styles.scss';

import BBicon from '../../../assets/BBicon.png'

const UserProfile = props => {
  const { currentUser } = props;
  const { displayName } = currentUser;

  return (
    <div className="UserProfile">
      <ul>
        <li>
          <div className="img">
            <img src={BBicon} />
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;