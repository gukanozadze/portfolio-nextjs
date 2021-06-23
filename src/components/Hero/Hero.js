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
        The purpsoe of development is you can create anything you want. I can build you CRM tables stock trading or E-Commerce
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
