import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMainWindow } from '../selectors/tabs';

const styles = {
    base: {
        margin: "100px 0px 70px 0px",
        overflowY: 'scroll',
        height: '100%'
    }
};

const MainPaneComp = ({component}) => (
    <div style={styles.base}>
      {component}
    </div>
);

MainPaneComp.propTypes = {
    component: PropTypes.element.isRequired
};

const mapStateToProps = (state) => {
    return {
        component: getMainWindow(state)
    };
};

const MainPane = connect(
    mapStateToProps
)(MainPaneComp);

export default MainPane;
