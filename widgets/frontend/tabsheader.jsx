// <ul>
//   <TabsHeader />
// </ul>

import React from 'react';

const TabsHeader = (props) => (
  <h1 onClick = {props.clickFunc}>
    {props.title}
  </h1>
);

export default TabsHeader;