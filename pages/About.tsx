import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const About: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
            <SEO
                title="About Us | SimplyDesign"
                description="Learn about our vision, mission, and the team behind SimplyDesign."
                canonical="/about"
            />

            {/* Introduction Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8"
                    >
                        <span className="text-red-600">Simply</span> <span className="text-blue-600">Design</span>
                    </motion.h1>
                </div>
                <div>
                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl leading-relaxed text-stone-600 dark:text-stone-300 font-light mb-8">
                        is a professional construction and finishing company with a passion for result.
                    </motion.p>
                    <motion.p variants={fadeInUp} className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                        Located in Alexandria, Egypt, we take great pride in providing ready-made design packages, general contracting and construction management to a range of industries throughout the country.
                    </motion.p>
                    <motion.p variants={fadeInUp} className="text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
                        We push ourselves to find better ways to serve our clients and maximize our contribution as we aim to provide brilliant services that go further than a single project. Repeat customers are an indication of our overall success.
                    </motion.p>
                </div>
            </motion.section>

            {/* What We Do Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-32"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif mb-12 border-b border-stone-200 dark:border-stone-800 pb-8">
                    WHAT WE DO
                </motion.h2>
                <div className="max-w-4xl">
                    <motion.p variants={fadeInUp} className="text-lg md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
                        Simply Design is a full service construction company that has the knowledge and understanding to meet customers building requirements. As the leader in the market, we put our know-how to work to provide the highest quality of construction and best practical solutions as well as constantly developing methods to ensure the success of each project.
                    </motion.p>
                    <motion.p variants={fadeInUp} className="text-lg md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed">
                        We believe that it is our duty to do everything we can to deliver the best service to our clients as we assist them before, during and after the project is completed.
                    </motion.p>
                </div>
            </motion.section>

            {/* Vision & Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h3 variants={fadeInUp} className="text-3xl font-serif mb-6 text-gold">Our Vision</motion.h3>
                    <motion.p variants={fadeInUp} className="text-stone-500 dark:text-stone-400 leading-relaxed">
                        To bridge the gap between Clients and Contractors not making third party consultant intervention a necessity by understanding direct client satisfaction and delivering quality assured solutions putting us on the forefront of the construction and fit-out industry.
                    </motion.p>
                </motion.section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h3 variants={fadeInUp} className="text-3xl font-serif mb-6 text-gold">Our Mission</motion.h3>
                    <motion.p variants={fadeInUp} className="text-stone-500 dark:text-stone-400 leading-relaxed">
                        Is to deliver projects that exceed our customers' expectations by approaching the construction process with transparency and reliability as well as providing a topnotch team. We are committed to be considered the contractor of choice to those who seek quality, excellence and dedication.
                    </motion.p>
                </motion.section>
            </div>

            {/* Values Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-32 bg-stone-100/50 dark:bg-stone-900/50 p-12 rounded-lg"
            >
                <motion.h3 variants={fadeInUp} className="text-4xl font-serif mb-12 text-center">Our Values</motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {['Quality', 'Dedication', 'Commitment', 'Excellence', 'Accountability', 'Integrity'].map((value) => (
                        <motion.div
                            key={value}
                            variants={fadeInUp}
                            className="text-xl md:text-2xl font-light text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 py-6 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-default"
                        >
                            {value}
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Who We Are Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-4xl mx-auto text-center md:text-left"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-12">
                    A Glimpse on who we are
                </motion.h2>
                <motion.div variants={fadeInUp} className="space-y-6 text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
                    <p>
                        Simply Design is dedicated to employing high quality professionals that have had extensive overall and particular experience of similar projects. The team also includes specialist designers who are experienced professionals in their respective fields and have been involved with our firm on a number of projects.
                    </p>
                    <p>
                        Driven by quality and service excellence, Simply Design Building Solutions looks to be in the forefront of Egypt's booming companies in the construction field.
                    </p>
                    <p>
                        Our Leadership having delivered several projects to multinational entities has closed several projects with high client satisfaction. Delivering multinational standards and specifications involving the best designers, site professionals and labor. Our Leadership and team combine scoped vision targeting to meet client needs and exceeding of their expectations.
                    </p>
                </motion.div>
            </motion.section>

            {/* Founders Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-32"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-16 text-center">
                    Founders
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Eng. Amr Elsharkawy */}
                    <motion.div variants={fadeInUp} className="bg-stone-100/40 dark:bg-stone-900/40 p-8 md:p-12 rounded-lg border border-stone-200 dark:border-stone-800/50 hover:border-gold/30 transition-colors duration-500 flex flex-col items-center text-center">
                        <div className="w-48 h-48 mb-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center border-2 border-stone-300 dark:border-stone-700 group-hover:border-gold/50 transition-colors">
                            <span className="text-4xl font-serif text-stone-500 dark:text-stone-600">AE</span>
                        </div>
                        <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-4">
                            Eng. Amr Elsharkawy
                        </h3>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                            An ingenious engineer with significant experience in executing all finishing processes and operations for both residential and commercial units. Amr is committed to skillfully schedule and control budget and time with highly professional management standards, Amr Graduated from Alexandria University 2011 with a Bachelor of civil engineering.
                        </p>
                    </motion.div>

                    {/* Eng. Tarek Beshr */}
                    <motion.div variants={fadeInUp} className="bg-stone-100/40 dark:bg-stone-900/40 p-8 md:p-12 rounded-lg border border-stone-200 dark:border-stone-800/50 hover:border-gold/30 transition-colors duration-500 flex flex-col items-center text-center">
                        <div className="w-48 h-48 mb-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center border-2 border-stone-300 dark:border-stone-700 group-hover:border-gold/50 transition-colors">
                            <span className="text-4xl font-serif text-stone-500 dark:text-stone-600">TB</span>
                        </div>
                        <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-4">
                            Eng. Tarek Beshr
                        </h3>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                            Dedicated civil engineer with over a decade of experience in design, construction, and project management. Proven ability to deliver complex projects on time and within budget, leveraging strong technical skills and effective leadership. Committed to driving innovation and sustainable solutions in the construction industry.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-32"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-16 text-center">
                    Meet Our Team
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: "John Doe", role: "Principal Architect", initials: "JD" },
                        { name: "Jane Smith", role: "Head of Interior Design", initials: "JS" },
                        { name: "Robert Wilson", role: "Senior Project Manager", initials: "RW" }
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group relative"
                        >
                            <div className="aspect-[3/4] bg-stone-200 dark:bg-stone-900 rounded-lg overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                {/* Placeholder Image Styling */}
                                <div className="w-full h-full flex items-center justify-center bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200 dark:group-hover:bg-stone-800/80 transition-colors duration-500">
                                    <span className="text-6xl font-serif text-stone-400 dark:text-stone-700 font-bold group-hover:text-gold transition-colors duration-500">
                                        {member.initials}
                                    </span>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-2 group-hover:text-gold transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-stone-400 text-sm tracking-widest uppercase">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

        </div>
    );
};

export default About;
