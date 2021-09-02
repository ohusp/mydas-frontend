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

export default function ProgrammesComp() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-7/12 px-4 mx-auto text-center" style={{marginTop: "50px", marginBottom: "100px"}}>
                        {/* <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div> */}
                        <H4 color="gray">We offer group and 1-to-1 lessons in the following areas</H4>
                    </div>

                    <div className="flex flex-wrap relative z-50">
                        <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card>
                                <CardImage alt="Card Image" src={Teamwork} />
                                <CardBody>
                                    <H6 color="gray">A-Level Private Tuition</H6>
                                    <Paragraph color="blueGray">
                                        11+ and GCSE
                                        Maths, English and Science Subjects for Years 7 - 10
                                    </Paragraph>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card>
                                <CardImage alt="Card Image" src={Teamwork} />
                                <CardBody>
                                    <H6 color="gray">Afterschool</H6>
                                    <Paragraph color="blueGray">
                                        5+ Afterschool Computing and Creative Club
                                    </Paragraph>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                            <Card>
                                <CardImage alt="Card Image" src={Teamwork} />
                                <CardBody>
                                    <H6 color="gray">Afterschool Club</H6>
                                    <Paragraph color="blueGray">
                                    </Paragraph>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
