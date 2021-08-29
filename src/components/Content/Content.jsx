import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Section, StyledDiv } from './Content.styles';

const Content = () => {
  return (
    <Section className={`container`} data-aos='fade-up' data-aos-once={true}>
      <StyledDiv>
        <h3>One account, multiple banking</h3>
        <p>
          Connect all your bank cards and debit cards to one easily accessible and equally secure
          account. Alloy allows you flexibility and control over all your bank transactions.
        </p>
        <div>
          <Link>
            learn more <FaArrowRight />{' '}
          </Link>
        </div>
      </StyledDiv>
    </Section>
  );
};

export default Content;
