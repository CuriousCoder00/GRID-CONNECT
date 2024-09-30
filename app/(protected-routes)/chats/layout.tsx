import React from 'react'

const layout = ({children}:{children: React.ReactNode;}) => {
  return (
    <div className='flex w-full h-full overflow-hidden'>
      {children}
    </div>
  )
}

export default layout
