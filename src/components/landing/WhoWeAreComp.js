import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';

export default function WhoWeAreComp() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-7/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Mydas Tutors is a community-based afterschool private tuition and digital skills training provider.</H4>
                    </div>

                    <div className="w-full md:w-6/12 px-4 mx-auto">
                        {/* <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div> */}
                        <LeadText color="blueGray">
                            We provide cost-effective online/on-site private tuition and computing training to young people age 5 - 16 in Manchester and Salford areas. Our bespoke tuition service focuses on families in low/medium economic background and in BAME community. We realise that several families in this stratum are struggling to make ends meet even long before the Covid-19 pandemic. As such, they are left out of the required curricular support being enjoyed by children and wards with affluent parents. Our service ensures that this category of young people is able to receive quality educational support to compete favourably among their peers elsewhere within and outside the UK. Our education and training programmes complement the limited and overstretched school sessions particularly in the areas of STEM and computing.
                        </LeadText>
                        <LeadText color="blueGray">
                            We offer both group and 1-to-1 tutoring using ethically sourced DBS checked subject experts from the universities and colleges including experienced teachers with teaching qualifications. <br></br>

                            We are proudly supported by The University of Salford, Santander Bank and the Manchester GC Business Growth Hub through a series of grant awards, intervention programmes and resources. <br></br>

                            Our management is led by a consultant with over 10 years of experience in academia. His portfolio of academic experience span across key stages and subject interests in STEM and Humanities.
                        </LeadText>
                        {/* <a
                            href="#pablo"
                            className="font-medium text-light-blue-500 mt-2 inline-block"
                        >
                            Read More
                        </a> */}
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardImage alt="Card Image" src={Teamwork} />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
