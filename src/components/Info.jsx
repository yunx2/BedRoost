import React from 'react';

class Info extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }
    
  render() {
    const hide = 'hide';
    const show = 'Read more about the space';
    if (this.state.showMore) {
      return ( 
        <div>
          <p>{this.props.about}</p>
          <p>{this.props.more}</p>
          <button 
            type="button" 
            onClick={() => {
              this.setState((state) => ({ showMore: !state.showmore }));
            }}
          >
            {hide}
          </button>
        </div>
      ); 
    } 
    return (
      <div>
        <p>{this.props.about}</p>
        <button 
          type="button"
          onClick={() => { 
            this.setState((state) => ({ showMore: !state.showmore }));
          }}
        >
          {show}
        </button>
      </div>
    ); 
  }  
}

export default Info;
