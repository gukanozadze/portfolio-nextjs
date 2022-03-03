import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 40, text: 'Jobs Completed as a Freelancer and local Developer'},
  { number: 4, text: 'Years of experience in web development', },
  { number: 100, text: 'Knowledge of technologies', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>
            {card.text}
          </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
  );

export default Acomplishments;
