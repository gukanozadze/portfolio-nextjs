import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider, SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development word.
    </SectionText>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              {visit && (
                <UtilityList>
                  <ExternalLinks href={visit} target="_blank">Visit</ExternalLinks>
                  <ExternalLinks disabled={!source} href={source} target="_blank">Source</ExternalLinks>
                </UtilityList>
              )}
            </TitleContent>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
