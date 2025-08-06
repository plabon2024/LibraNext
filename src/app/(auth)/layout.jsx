import Logo from '@/components/Logo'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <Logo></Logo>
        {children}
    </div>
  )
}
