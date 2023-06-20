"use client"
import { Container } from "@mui/material"

const ContainerComponent = ({ children }) => {
  return (
    <Container maxWidth="xl" >
      {children}
    </Container>
  )
}

export default ContainerComponent