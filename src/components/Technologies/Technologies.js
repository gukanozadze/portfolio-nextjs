import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
      <SectionText>I know many libraries and design patterns. component libraries (Like MaterialUI, HeadlessUI, ChakraUI...), extensively used TailwindCSS, used either react-hook-form or Formik to manage forms that have values fetched from API.  </SectionText>
      <SectionText>Developed dashboard interfaces, multi-language auth and payment pages and services, and much more..</SectionText>
      <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Redux, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Nest.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
  </Section>
);

export default Technologies;
