import React from 'react';
import { Accounts } from 'meteor/accounts-base';

// export default class PrivateHeader extends React.Component {
//   onLogout() {
//     Accounts.logout();
//   }
//   render () {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.onLogout.bind(this)}>Log Out</button>
//       </div>
//     );
//   }
// };

// Stateless functional component w/ propTypes definition
const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header_title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => Accounts.logout()}>Log Out</button>
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;