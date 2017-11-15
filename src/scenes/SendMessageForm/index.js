import { connect } from 'react-redux';
import { sendMessage } from './actions';
import SendMessageForm from './components/SendMessageForm';

const mapStateToProps = state => {
  const { sendMessage: { status, error } } = state;
  return {
    status,
    error,
  };
};

export default connect(mapStateToProps, { sendMessage })(SendMessageForm);
