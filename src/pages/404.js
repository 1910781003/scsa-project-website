import React from "react"
import { Link } from "gatsby"

import CenteredLayout from "../components/CenteredLayout/CenteredLayout"

import SEO from "../components/SEO/SEO"

import Button from "@material/react-button"

// Styles
import "../styles/app.scss"

const NotFoundPage = () => (
  <CenteredLayout>
    <SEO title="404: Not Found" />
    <h1>Uh...this is awkward</h1>
    <p>
      Uh oh! It looks like the place you were looking for is no longer here or
      there's a typo. Please check the URL for mistakes and try again.{" "}
      <span role="img" aria-label="wink">
        😉
      </span>
    </p>
    <Link to="/">
      <Button raised>Go Back Home</Button>
    </Link>
  </CenteredLayout>
)

export default NotFoundPage
