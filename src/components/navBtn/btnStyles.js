import styled  from 'styled-components'

export const Div =styled.div`

body
  background: black

.container
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

.burgermenu
  border: none
  background: none
  width: 65px
  height: 45px
  position: absolute
  top: 50%
  left: 50%
  margin-left: -25px
  margin-top: -25px
  padding: 0
  opacity: 0.5
  transition: opacity 0.5s ease
  outline: none
  &:hover
    opacity: 1
      
  span
    display: block
    width: 100%
    height: 1px
    position: absolute
    top: 0
    left: 0
    border-top: 1px solid white
    transform: translateY(22px)
    transition: transform 0.5s ease, border-color 0.5s ease 0.3s
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 1px
      background: white  
      transform: translateY(-22px)
      animation-name: topLineBurger
      animation-duration: 0.6s
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000)
      animation-fill-mode: forwards
    &:after
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 1px
      background: white
      transform: translateY(22px)
      animation-name: bottomLineBurger
      animation-duration: 0.6s
      animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000)
      animation-fill-mode: forwards
   &.opened
    span
      border-color: transparent
      transition: border-color 0.3s ease
      &:before
        animation-name: topLineCross
        animation-duration: 0.6s
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000)
        animation-fill-mode: forwards
      &:after
        animation-name: bottomLineCross
        animation-duration: 0.6s
        animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000)
        animation-fill-mode: forwards


@keyframes topLineCross {
  0% {
    transform: translateY(-22px)
  }
  50% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(0px) rotate(45deg)
  }
}

@keyframes bottomLineCross {
  0% {
    transform: translateY(22px)
  }
  50% {
    transform: translateY(0px)
  }
  100% {
    transform: translateY(0px) rotate(-45deg)
  }
}

@keyframes topLineBurger {
  0% {
    transform: translateY(0px) rotate(45deg)
  }
  50% {
    transform: rotate(0deg)
  }
  100% {
    transform: translateY(-22px) rotate(0deg)
  }
}

@keyframes bottomLineBurger {
  0% {
    transform: translateY(0px) rotate(-45deg)
  }
  50% {
    transform: rotate(0deg)
  }
  100% {
    transform: translateY(22px) rotate(0deg)
  }
}

`