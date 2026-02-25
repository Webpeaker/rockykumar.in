import Image from 'next/image';

import SagarFullPose from '/public/images/rocky_about.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={SagarFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">

          <Typography>
            I am Rocky Kumar, an Assistant Professor at Poornima University with a strong focus on Artificial Intelligence, Full-Stack Development, and emerging technologies. My academic and professional journey is centered on delivering industry-oriented education and impactful research.

            With expertise in C++, ASP.NET, React.js, SQL, Cloud Computing, and AI-driven systems, I actively bridge theoretical concepts with practical implementation. I have contributed to multiple research publications, book chapters, patents, and international conferences in domains including Generative AI, IoT, Medical AI, Sustainable Technologies, and Digital Inclusion.

            I hold certifications from Google Cloud (Cybersecurity) and Amazon Web Services (Generative AI Foundations), strengthening my expertise in cloud security and AI applications.

            My teaching philosophy emphasizes innovation, problem-solving, and research-driven learning. I am committed to mentoring students, fostering leadership, and contributing to ethical and inclusive technological advancement.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
