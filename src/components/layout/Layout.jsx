import Header from "./header/Header.jsx";
import Promo from "./promo/Promo.jsx";

const Layout = ({children, backLink = '/'}) => {
    return (
        <div>
            <Header />
            <Promo />
            {children}
        </div>
    );
};

export default Layout;