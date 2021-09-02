import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import ProgrammesComp from 'components/landing/ProgrammesComp';
import TeamSection from 'components/landing/TeamSection';
import ContactSection from 'components/landing/ContactSection';

export default function Programmes() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main style={{paddingTop: "80px"}}>
                {/* <Header /> */}
                <ProgrammesComp />
            </main>
            <DefaultFooter />
        </>
    );
}
