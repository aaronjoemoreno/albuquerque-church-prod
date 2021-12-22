import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"



const Hero = ({ children }) => {

    return (
      <div class="community-hero d-flex px-1 px-sm-5">
        <div class="container align-self-center px-4">
          <h1>
            Community
          </h1>
        </div>
      </div>
    )
  }

  export default Hero