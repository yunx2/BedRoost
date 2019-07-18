import React from 'react';

class Info extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }
    
  render() {
    let view;
    const hide = 'hide';
    const show = 'Read more about the space';
    if (this.state.showMore === true) {
      view = (
        <div>
          <p>{this.props.about}</p>
          The space
          <p>{this.props.more}</p>
          <button 
            type="button" 
            onClick={() => {
              this.setState({ showMore: false });
            }}
          >
            {hide}
          </button>
        </div>
      );
    } else {
      view = (
        <div>
          <p>{this.props.about}</p>
          <button
            type="button"
            onClick={() => {
              this.setState({ showMore: true });
            }}
          >
            {show}
          </button>
        </div>
      );
    }
    return view;
  }      
}

export default Info;
