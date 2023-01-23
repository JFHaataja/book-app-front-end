import NavBar from 'components/elements/Navbar/Navbar';
import Footer from 'components/elements/Footer/Footer';

function Layout(props) {
    return (
        <>
            <NavBar />
            {props.children}
            <Footer />
        </>
    );
}

export default Layout;
