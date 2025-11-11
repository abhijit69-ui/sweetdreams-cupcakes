import Container from '../../utils/Container';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <header className='absolute top-0 left-0 w-full z-50 bg-transparent'>
      <Container>
        <nav className='flex items-center justify-between py-5'>
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
