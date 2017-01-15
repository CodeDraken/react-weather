import React, { Component } from 'react';

class ErrorModal extends Component {

  componentDidMount() {
    let modal = new Foundation.Reveal( $( '#error-modal' ) );
    modal.open();
  }
  render() {
    let { title, message } = this.props;

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
        </button>
        </p>
      </div>
    );
  }
};

ErrorModal.defaultProps = {
  title: 'Oops!',
  message: 'Something went wrong with your request'
};

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string
};

export default ErrorModal;
