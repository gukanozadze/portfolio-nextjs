import React from "react"

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents"
import { LeftSection } from "./HeroStyles"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Welctome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm passionate software developer I can create anything you want. I want to always keep growing, learning and improving. I want to create something that I'm passionate about.
      </SectionText>
    </LeftSection>
  </Section>
)

export default Hero
