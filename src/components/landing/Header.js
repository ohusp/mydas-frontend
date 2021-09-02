import H2 from '@material-tailwind/react/Heading2';
import LeadText from '@material-tailwind/react/LeadText';

export default function Header() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
            <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
            <div className="container max-w-8xl relative mx-auto">
                <div className="items-center flex flex-wrap home-title-text">
                    <div className="w-full lg:w-12/12 px-4 ml-auto mr-auto text-center">
                        <H2 color="white">A community-based private tuition in Salford and Manchester</H2>
                        <div className="text-gray-200">
                            <LeadText color="gray-200">
                            We provide cost-effective online/on-site private tuition and computing training to young people age 5 - 16 in Manchester and Salford areas. Our bespoke tuition service focuses on families in low/medium economic background and in BAME community.
                            </LeadText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
