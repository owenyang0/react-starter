// React elements
// React.render(<img src='http://owenyang0.github.io/img/background.jpg' />, document.body);

// Components
// var Photo = React.createClass({
// 
//   render: function() {
//     return <img src='http://owenyang0.github.io/img/background.jpg' />
//   }
// });
// 
// React.render(<Photo />, document.body);

// Props
// var Photo = React.createClass({
// 
//   render: function() {
//     return (
//       <div className='photo'>
//         <img src={this.props.imageURL} />
//         <span>{this.props.caption}</span>
//       </div>
//     )
//   }
// });
// 
// React.render(<Photo imageURL='http://owenyang0.github.io/img/background.jpg' caption='Headset' />, document.body);

// State
// var Photo = React.createClass({
// 
//   toggleLiked: function() {
//     this.setState({
//       liked: !this.state.liked
//     });
//   },
// 
//   getInitialState: function() {
//     return {
//       liked: false
//     }
//   },
// 
//   render: function() {
//     var buttonClass = this.state.liked ? 'active' : '';
// 
//     return (
//       <div className='photo'>
//         <img src={this.props.src} />
// 
//         <div className='bar'>
//           <button onClick={this.toggleLiked} className={buttonClass}>
//             ♥
//           </button>
//           <span>{this.props.caption}</span>
//         </div>
//       </div>
//     )
//   }
// });
// 
// React.render(<Photo src='http://owenyang0.github.io/img/background.jpg' caption='Headset'/>, document.body);

// Composition
var Photo = React.createClass({

  toggleLiked: function() {
    this.setState({
      liked: !this.state.liked
    });
  },

  getInitialState: function() {
    return {
      liked: false
    }
  },

  render: function() {
    var buttonClass = this.state.liked ? 'active' : '';

    return (
      <div className='photo'>
        <img src={this.props.src} />

        <div className='bar'>
          <button onClick={this.toggleLiked} className={buttonClass}>
          ♬
          </button>
          <span>{this.props.caption}</span>
        </div>
      </div>
    )
  }
});

var PhotoGallery = React.createClass({

  getDataFromServer: function() {
    return [{
      url: '/images/react.png',
      caption: 'React'
    },
    {
      url: '/images/mocha.png',
      caption: 'Mocha'
    },
    {
      url: '/images/npm.png',
      caption: 'npm'
    }];
  },

  render: function() {
    var data = this.getDataFromServer();

    var photos = data.map(function(photo) {
      return <Photo src={photo.url} caption={photo.caption} />
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    )
  }
});

React.render(<PhotoGallery />, document.querySelector('.container'));
