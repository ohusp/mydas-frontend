import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WhoWeAreComp from 'components/landing/WhoWeAreComp';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';

export default function WhoWeAre() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main style={{paddingTop: "80px"}}>
                {/* <Header /> */}
                <WhoWeAreComp />
            </main>
            <DefaultFooter />
        </>
    );
}
