import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Step into the realm of my curated chronicles, <br />
        where creativity knows no bounds
        </SectionTitle>
        <SectionText>
        My personal portfolio serves as an immersive portal to my artistic expression and professional endeavors, unveiling a captivating narrative of my journey. Through its carefully crafted showcases, I aim to inspire, connect, and leave an indelible mark on those who venture within.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;