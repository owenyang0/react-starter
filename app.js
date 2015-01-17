// React.render(<img src='http://2.bp.blogspot.com/-SXd2K8uSRmU/T-A2QmwPxSI/AAAAAAAADWw/0vJW2l3vfMs/s200-c/javascript_logo.jpg' />, document.body);

var Photo = React.createClass({

  render: function() {
    return <img src='http://2.bp.blogspot.com/-SXd2K8uSRmU/T-A2QmwPxSI/AAAAAAAADWw/0vJW2l3vfMs/s200-c/javascript_logo.jpg' />
  }
});

React.render(<Photo />, document.body);
