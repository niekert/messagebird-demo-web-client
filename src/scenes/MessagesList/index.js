import { connect } from 'react-redux';
import MessagesList from './components/MessagesList';

function mapStateToProps(state) {
  const { messagesList: { messages, status } } = state;

  return {
    messages,
    status,
  };
}

export default connect(mapStateToProps)(MessagesList);
