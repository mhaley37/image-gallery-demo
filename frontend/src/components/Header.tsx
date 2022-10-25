import { Navbar, Container } from 'react-bootstrap';

interface headerProps {
  title?: string;
}

const navBarStyle: React.CSSProperties = {
  backgroundColor: 'lightblue',
};

export const Header = ({ title = 'title' }: headerProps) => {
  return (
    <Navbar variant="light" style={navBarStyle}>
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
