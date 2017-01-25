import React, {PropTypes} from 'react'
import TopBar from '../../components/TopBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './CoreLayoutStyle.css'

export const CoreLayout = ({children}) => {
  return (
    <div className="Main-container" >
      <TopBar />
      <Header />
      <div className="Content-container" >
        {children}
      </div>
      <Footer />
    </div>
  );
};

CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
};

export default CoreLayout;