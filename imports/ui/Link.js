import React, { Component } from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

// Link.js is "dumb" component, convert to
// Stateless functional Component
export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links"/>
      <div className="page-content">
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};

// export default class Link extends React.Component {
//   render() {
//     return (
//       <div>
//         <PrivateHeader title="Your Links"/>
//         <LinksList/>
//         <AddLink/>
//       </div>
//     );
//   }
// };

