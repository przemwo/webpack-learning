import React from 'react';

import styles from './component.css';

class Component extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.componentHeader}>Hello from React!</h1>
      </div>
    );
  }
}

export default Component;
