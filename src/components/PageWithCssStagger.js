import React from 'react';
import Stagger from 'react-css-stagger';

const PageWithCssStagger = () => (
  <Stagger transition="fadeIn" delay={400}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </Stagger>
);

export default PageWithCssStagger;