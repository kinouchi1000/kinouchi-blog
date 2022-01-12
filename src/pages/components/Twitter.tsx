import React, { useEffect } from 'react'

let isLoadwidgets: boolean = false
export const Twitter = ({
  width,
  height,
  theme,
}: {
  width: number
  height: number
  theme: string
}) => {
  useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement('script')
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      s.setAttribute('charset', 'utf-8')
      document.body.appendChild(s)
      isLoadwidgets = true
    }
  }, [])
  return (
    <a
      className='twitter-timeline'
      data-width={width}
      data-height={height}
      data-theme={theme}
      data-chrome='noheadernofooternoborders'
      href='https://twitter.com/takaaa_firebomb?ref_src=twsrc%5Etfw'
    >
      A Twitter List by takaaa_firebomb
    </a>
  )
}

export default Twitter
