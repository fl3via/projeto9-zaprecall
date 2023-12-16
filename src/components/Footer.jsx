import { CompletedFooter } from "../Styled/FooterStyled"

export default function Footer({ questions, completed }) {
  return (
    <CompletedFooter data-test="footer">
      {completed}/{questions} COMPLETED
    </CompletedFooter>
  )
}


