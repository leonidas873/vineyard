import PropTypes from 'prop-types';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
