import React from 'react';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

class UpDownVoter extends React.Component {
  render() {
    return (
      <div className="vote-score">
        <FaArrowUp color='green' onClick={()=>{ alert('up'); }} />
        <FaArrowDown color='red' onClick={()=>{ alert('down'); }} />
      </div>
    );
  }
}

export default UpDownVoter;