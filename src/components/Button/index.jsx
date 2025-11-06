export const Button = ({ children, variant = 'primary', isBold = false, className='' }) => {
  // Colocar o leading após o text faz com que o text-xl tenha o line-height sobreposto
  return <button className={`flex items-center justify-center p-4 rounded-[35px]  text-xl leading-5 ${
    variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
    } ${isBold && 'font-bold'} ${className}`}>
    {children}
  </button>
}