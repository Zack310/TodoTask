const Button = ({color, text, onClick})=> {

  return (
    <button 
    sytle={{backgroundcolor:color}} 
    className='btn'
    onClick={onClick}
    >
    {text}
    </button>
    )
}

Button.defaultProps = {
  color:'steelbule'
}

export default Button;