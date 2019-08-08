import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
    border-radius:8px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    display:inline-block;
    margin:1%;
    position:relative;
    width:31.33%;
    &:after{
        content:'';
        display:block;
        padding-bottom:100%;
    } 
    `
export const Grid = styled.div`
    padding-top:32px;
`

export const Image = styled.img`
${fadeIn()}    
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;

`
