import React, { Children, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return <div className="max-w-5xl text-center m-auto">{children}</div>
}

export default MainLayout
