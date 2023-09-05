import React from "react"

export default function SectionTitles (props) {
  return (
    <>
      <h2 className='section-title'>{props.h2}</h2>
      <p className='section-subtitle'>{props.paragraph}</p>
    </>
  )
}