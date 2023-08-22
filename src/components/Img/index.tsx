import React, { useState } from 'react'
import styled from 'styled-components'

interface ImgProps {
  width: number | string
  height?: number | string
  loading?: 'eager' | 'lazy'
  src: string
  noLoader?: boolean
  alt?: string
}

const CircleCSS = styled.div<any>`
  height: 0;
  width: 100%;
  padding-bottom: ${({ width, height }) => `calc((100% / (${width} / ${height})))`};
`

const Img: React.FC<ImgProps> = ({ width, loading = 'eager', src, height, noLoader = true, alt = '' }) => {
  const [loaded, setLoaded] = useState(false)

  const show = loaded || noLoader
  return (
    <>
      <img
        onLoad={() => setLoaded(true)}
        src={src}
        loading={loading}
        onContextMenu={(e) => e.preventDefault()}
        draggable="false"
        alt={alt}
        height={show ? height : '0px'}
        width={show ? width : '0px'}
      />
      {!show && (
        <CircleCSS>
          <div />
        </CircleCSS>
      )}
    </>
  )
}

export default Img
