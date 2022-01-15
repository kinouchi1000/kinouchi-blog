import React from 'react'
import styled from 'styled-components'

export const RichWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  h1 {
    font-size: 200%;
    font-weight: bold;
    border-bottom: 1px solid #dddddd;
    margin: 20px 2px;
  }
  h2 {
    font-size: 180%;
    font-weight: bold;
    border-bottom: 1px solid #dddddd;
    margin: 16px 2px;
  }
  h3 {
    font-size: 160%;
    font-weight: bold;
    margin: 12px 2px;
  }
  h4 {
    font-size: 140%;
    font-weight: bold;
    margin: 10px 2px;
  }
  h5 {
    font-size: 130%;
    font-weight: bold;
    margin: 10px 2px;
  }
  pre {
    code {
      border-radius: 8px;
    }
  }
  p {
    strong {
      font-size: 120%;
    }
    u {
      text-decoration-color: blue;
      text-decoration-style: dotted;
      text-decoration-thickness: 3px;
    }
    s {
      color: gray;
    }
    code {
      margin: 2px;
      padding: 1px;
      background-color: #333333;
      color: white;
    }
  }
`
export default RichWrapper
