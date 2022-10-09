
import React, { SyntheticEvent, useState } from "react";
import { MdOutlineContentCopy } from 'react-icons/md'


interface Props {
  children: JSX.Element
}

const CopyBtn: React.FC<Props> = ({ children }) => {
  const handleClick = (e: SyntheticEvent) => {
    navigator.clipboard.writeText(children[0].props.children[0]);
  }

  return (
    <span className="text-white absolute right-2 top-1 hover:cursor-pointer transition hover:scale-150">
      <MdOutlineContentCopy onClick={handleClick} />
    </span>
  )
}

export default CopyBtn

