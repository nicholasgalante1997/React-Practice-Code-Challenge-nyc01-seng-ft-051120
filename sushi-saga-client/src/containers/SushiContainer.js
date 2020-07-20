import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
const API = "http://localhost:3000/sushis"

class SushiContainer extends React.Component {


  render () {
    return (
    <Fragment>
      <div className="belt">
        { 
        // this.props.sushi.map(sushi => {
        //  return <Sushi 
        //   key={sushi.id}
        //   name={sushi.name}
        //   img_url={sushi.img_url}
        //   price={sushi.price}
        //   />
        }
          
        
        <MoreButton />
      </div>
    </Fragment>
  )}
}

export default SushiContainer
