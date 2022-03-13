import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/img1.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard 
                        color="red" 
                        icon="fingerprint" 
                        title="Personalised &amp; Flexible Learning"
                    >
                        With MYDAS Tutors School your child and you get the freedom to continue in the same school regardless of your situation and location. The curriculum is also beneficial for gifted students, professional athletes and slow learners as the student can decide the pace. 
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="stars"
                        title="Skill Based Learning"
                    >
                        We cover the benchmarks of the national curriculum framework and couple that with several electives that the student can choose from during their time at MYDAS Tutors School. With students not wasting time for commute, many take up language studies, performing arts and sports during their free time.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="autorenew"
                        title="Pursuit of Academic Excellence"
                    >
                        As MYDAS Tutors is location agnostic, we select top faculty from around the country for our school this is extremely beneficial for students that do not have access to quality education in home town. 
                    </StatusCard>
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Education with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            MYDAS Tutors provides a high-quality, online liberal arts education suitable in scope and depth to the challenges of the 21st century. The University assesses and evaluates all aspects of its academic model on an ongoing basis.
                        </LeadText>
                        <LeadText color="blueGray">
                            MYDAS Tutors creates a global community by making its academic programs, educational services, and employment opportunities available to qualified individuals from all over the world, and by providing learning opportunities that engage students and faculty from diverse backgrounds.
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
                            <CardBody>
                                <H6 color="gray">Top Notch Services</H6>
                                <Paragraph color="blueGray">
                                    The mission of MYDAS Tutors is to offer affordable, quality, online, educational programs to any qualified student.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
