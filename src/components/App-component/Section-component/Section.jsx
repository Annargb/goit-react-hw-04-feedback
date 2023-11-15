import { Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <section>
    <Title>{title}</Title>
    {children}
  </section>
);
