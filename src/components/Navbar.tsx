import { useLayoutEffect, useRef } from 'react'

import styled from '@emotion/styled'
import gsap from 'gsap'

const NavbarContainer = styled.nav`
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  color: var(--dark-blue-lighten);
  box-shadow: 0px 4px 70px rgba(30, 40, 52, 0.08);
  position: sticky;
  z-index: 1000;
  top: 0;
  background-color: var(--white);
  width: 100%;
`

let posicionActual = window.scrollY

export function Navbar (): JSX.Element {
  const navbarRef = useRef<HTMLMenuElement>(null!)

  useLayoutEffect(() => {
    let handleScroll = (): void => {}
    const gsapContext = gsap.context(() => {
      handleScroll = (): void => {
        if (window.scrollY > posicionActual) {
          gsap.to(navbarRef.current, {
            y: 0,
            ease: 'back',
            opacity: 1,
            stagger: 0.1
          })
          gsap.to(navbarRef.current?.children, {
            y: 0,
            ease: 'back',
            opacity: 1,
            stagger: 0.1
          })
        } else {
          gsap.to(navbarRef.current, {
            y: -100,
            ease: 'back',
            opacity: 0,
            stagger: 0.1
          })

          gsap.to(navbarRef.current.children, {
            y: -100,
            ease: 'back',
            opacity: 0,
            stagger: 0.1
          })
        }
        posicionActual = window.scrollY
      }
    }, navbarRef)

    window.addEventListener('scroll', handleScroll)

    return () => {
      gsapContext.revert()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <NavbarContainer ref={navbarRef}>
      <div>
        <a href='#'>Logo</a>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href='#'>Logo</a>
        <a href='#'>Logo</a>
        <a href='#'>Logo</a>
      </div>
    </NavbarContainer>
  )
}
