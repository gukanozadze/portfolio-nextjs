import React from "react"

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents"
import Button from "../../styles/GlobalComponents/Button"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Welctome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm passionate software developer I can create anything you want. Beauty of coding is that it is infinite.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/gukanozadze/portfolio-nextjs'}>
        Code on github
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
