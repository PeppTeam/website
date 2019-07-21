import { Link } from "gatsby"
import React from "react"

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        fontFamily: "catamaran",
        fontWeight: 800,
        fontSize: "2em",
        textAlign: "center",
        color: "white",
      }}
    >
      {children}
    </Link>
  )
}

const Logo = () => {
  return (
    <div
      style={{
        width: "70px",
        height: "70px",
        backgroundColor: "#FFD839",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          margin: 0,
          fontFamily: "catamaran",
          fontWeight: 800,
          textDecoration: "none",
          color: "white",
        }}
      >
        Pepp
      </span>
    </div>
  )
}

const height = 100
class Header extends React.Component {
  state = {
    show: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  render() {
    return (
      <>
        <header
          style={{
            width: "100vw",
            backgroundColor: "#7878E7",
            zIndex: 99999,
            height: `${height}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              <Logo />
            </Link>
            <div
              style={{ position: "absolute", right: 0, top: 0, zIndex: 99999 }}
            >
              <button href="#" onClick={this.toggleMenu}>
                {this.state.show ? "Close" : "Open"}
              </button>
            </div>
          </div>
        </header>
        <div
          style={{
            width: "100vw",
            height: "350px",
            transform: `translateY(${this.state.show ? "0" : "-120vh"})`,
            transition: ".4s ease-in-out",
            backgroundColor: "#7878E7",
            padding: "36px",
            zIndex: 1,
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(3, 48px) auto",
              gridGap: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink to="/om-pepp">Om Pepp</NavLink>
            <NavLink to="/blogg">Blogg</NavLink>
            <NavLink to="/ansok">Vill du vara med?</NavLink>
            <NavLink to="/mentorsprogram">Mentorsprogrammet</NavLink>
          </div>
        </div>
      </>
    )
  }
}

export default Header
