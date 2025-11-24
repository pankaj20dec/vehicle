import React from 'react'

type Props = {
  text?: string
}

const Heading = ({text}: Props) => {
  return (
    <div>{text}</div>
  )
}

export default Heading