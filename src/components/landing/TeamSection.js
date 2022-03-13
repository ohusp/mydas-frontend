import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-4-470x470.png';
import Image2 from 'assets/img/team-4-470x470.png';
import Image3 from 'assets/img/team-4-470x470.png';
import Image4 from 'assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Here are our some of our Tutors">
                    We have limitless collections of seasoned tutors and facilitators, from across the world.<br></br>
                    While it’s always great to meet face-to-face when it's possible, in today’s world, online tutoring is the way to go.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Ryan Tompson"
                        position="Web Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Romina Hadid"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="Alexa Smith"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    />
                </div>
            </div>
        </section>
    );
}
