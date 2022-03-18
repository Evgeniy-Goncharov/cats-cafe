import Header from "./../header/header";
import Footer from "./../footer/footer";
import { PageMain } from "./styles";

export default function PageWrapper({ children, pageUrl }) {
    return (
        <>
            <Header pageUrl={pageUrl} />
            <PageMain>
                {children}
            </PageMain>
            <Footer />
        </>
    )
}