class UpDownVoter extends React.Component {
  render() {
    return (
      <div className="up-down-voter">
        <FaArrowUp color='green' onClick={()=>{ alert('up'); }} />
        <FaArrowDown color='red' onClick={()=>{ alert('down'); }} />
      </div>
    );
  }
}