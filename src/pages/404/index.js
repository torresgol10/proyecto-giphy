/** @jsxImportSource @emotion/react */import { css, jsx } from "@emotion/react"
import Button from "components/Button"
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"

const pageErrorStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`

const codeErrorStyles = css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem auto;
  color: #fff;
`

const SIZE = '350px'

const gifErrorStyles = css({
    margin: "1rem auto",
    width: SIZE,
    height: SIZE,
    objectFit: 'cover',
    "&:hover": {
        cursor: 'pointer'
    }
})

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I'];

export default function Page404() {
    const randomGif = () => {
        return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
    }
    return <>
        <Helmet>
            <title>404 - Page not found</title>
        </Helmet>

        <header className="o-header">
            <SearchForm />
        </header>
        <div css={pageErrorStyles}>
            <h1 css={codeErrorStyles}>404</h1>
            <p css={msgErrorStyles}>Sometimes gettings lost isn´t than bad</p>
            <img css={gifErrorStyles} src={randomGif()} alt="alt-page-404" />
            <Button href="/" >Go to home</Button>
        </div>
    </>
}