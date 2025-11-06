import Container from '../../utils/Container';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <header className=''>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            to='hero'
            smooth={true}
            duration={1000}
            offset={-80}
            className='flex items-center gap-2 cursor-pointer'
          >
            <span className='text-xl font-primary font-bold'>Sweet Dreams</span>
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
