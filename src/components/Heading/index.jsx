export const Heading = ({ children, type = 'h1', color = '', className='' }) => {
  const customizedColor = color === 'white' ? `text-white` : 'text-gray-900';

  if (type === 'h1') {
    return <h1 className={`text-[4.625rem] leading-21 font-semibold ${customizedColor} ${className}`}>{children}</h1>
  }

  if (type === 'h4') {
    return <h1 className={`text-[1.75rem] leading-10 font-normal ${customizedColor} ${className}`}>{children}</h1>
  }
  
  return <h2 className={`text-5xl leading-13.75 ${customizedColor} ${className}`}>{children}</h2>
}