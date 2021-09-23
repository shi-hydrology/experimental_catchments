import React, {Component} from 'react';
import Header from './Header.js'
import DevelopingCard from './DevelopingCard.js'
import {FetchData} from './DevelopingCard.js'
// export default class ArchivePage extends Component{
// 	render(){
// 		return(
// 			<div>
// 				<Header/>
// 				<DevelopingCard/>
// 			</div>
// 			)
// 	}
// }

let s = FetchData();
console.log("FFFFFUUUUUUUUUUUUUUU~ \n\n", s)

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/test")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
            msg: ":(",
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
			msg: "ОЧЕНЬ Бесит",
            error

          });
        }
      )
  }

  render() {
    const { error, isLoaded, items, msg } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
		  <div>
			  <Header/>
			  <p>{ error } , {isLoaded}, {items}, { msg }, БЛЕАТЬ!</p>
			  <DevelopingCard/>
		  </div>

      );
    }
  }
}
