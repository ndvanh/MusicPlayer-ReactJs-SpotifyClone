export default function Button({
  children,
  type='button',
  color='black',
  background='white',
  radius ='999px',
  h,
  w,
  p,
  onClick,
  disabled,
  title
}) {
  return (
  <button type={type} 
          title={title}
          disabled={disabled} 
          onClick={onClick} 
          style={{color:color,
                  backgroundColor:background,
                  height:h,
                  width:w,
                  padding:p,
                  borderRadius:radius }}
  >
    {children}
  </button>
  )
}
