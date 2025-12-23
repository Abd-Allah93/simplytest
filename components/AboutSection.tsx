import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { HomeContent } from '../types';

interface AboutSectionProps {
    content: HomeContent;
}

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

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
    const { getContent } = useLanguage();
    const { t } = useTranslation();

    const aboutTitle = getContent(content, 'about_title') || "Simply Design";
    const aboutDescription = getContent(content, 'about_description') || "is a professional construction and finishing company with a passion for result.";
    const visionText = getContent(content, 'vision_text') || "To bridge the gap between Clients and Contractors...";
    const missionText = getContent(content, 'mission_text') || "Is to deliver projects that exceed our customers' expectations...";

    // Fallback data if CMS is empty
    const values = content.values || [
        { title: 'Quality', title_ar: 'الجودة' },
        { title: 'Dedication', title_ar: 'التفاني' },
        { title: 'Commitment', title_ar: 'الالتزام' },
        { title: 'Excellence', title_ar: 'التميز' },
        { title: 'Accountability', title_ar: 'المسؤولية' },
        { title: 'Integrity', title_ar: 'النزاهة' }
    ];

    const founders = content.founders || [
        { name: "Eng. Amr Elsharkawy", role: "Founder", bio: "An ingenious engineer...", initials: "AE" },
        { name: "Eng. Tarek Beshr", role: "Founder", bio: "Dedicated civil engineer...", initials: "TB" }
    ];

    const team = content.team || [
        { name: "John Doe", role: "Principal Architect", initials: "JD" },
        { name: "Jane Smith", role: "Head of Interior Design", initials: "JS" },
        { name: "Robert Wilson", role: "Senior Project Manager", initials: "RW" }
    ];

    return (
        <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-200 dark:border-stone-800/50">

            {/* Introduction Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <motion.h2
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-serif font-bold mb-8"
                    >
                        {aboutTitle}
                    </motion.h2>
                </div>
                <div>
                    <motion.div variants={fadeInUp} className="text-xl md:text-2xl leading-relaxed text-stone-600 dark:text-stone-300 font-light mb-8">
                        <div dangerouslySetInnerHTML={{ __html: aboutDescription }} />
                    </motion.div>
                </div>
            </motion.div>

            {/* Vision & Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-serif mb-6 text-gold">Our Vision</motion.h2>
                    <motion.p variants={fadeInUp} className="text-stone-500 dark:text-stone-400 leading-relaxed">
                        {visionText}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-serif mb-6 text-gold">Our Mission</motion.h2>
                    <motion.p variants={fadeInUp} className="text-stone-500 dark:text-stone-400 leading-relaxed">
                        {missionText}
                    </motion.p>
                </motion.div>
            </div>

            {/* Values Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mb-32 bg-stone-100/50 dark:bg-stone-900/50 p-12 rounded-lg"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl font-serif mb-12 text-center">Our Values</motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {values.map((value, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="text-xl md:text-2xl font-light text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 py-6 rounded hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-default"
                        >
                            {getContent(value, 'title')}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Founders Section */}
            <motion.div
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
                    {founders.map((founder, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-stone-100/40 dark:bg-stone-900/40 p-8 md:p-12 rounded-lg border border-stone-200 dark:border-stone-800/50 hover:border-gold/30 transition-colors duration-500 flex flex-col items-center text-center"
                        >
                            {founder.image ? (
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-48 h-48 mb-8 rounded-full object-cover border-2 border-stone-300 dark:border-stone-700 group-hover:border-gold/50 transition-colors"
                                    loading="lazy"
                                    decoding="async"
                                />
                            ) : (
                                <div className="w-48 h-48 mb-8 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center border-2 border-stone-300 dark:border-stone-700 group-hover:border-gold/50 transition-colors">
                                    <span className="text-4xl font-serif text-stone-500 dark:text-stone-600">
                                        {(founder as any).initials || founder.name.charAt(0)}
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-serif text-stone-900 dark:text-white mb-4">
                                {founder.name}
                            </h3>
                            <p className="text-stone-500 text-sm tracking-widest uppercase mb-4">
                                {founder.role}
                            </p>
                            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                                {getContent(founder, 'bio')}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Team Section */}
            <motion.div
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
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group relative"
                        >
                            <div className="aspect-[3/4] bg-stone-200 dark:bg-stone-900 rounded-lg overflow-hidden mb-6 relative">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200 dark:group-hover:bg-stone-800/80 transition-colors duration-500">
                                        <span className="text-6xl font-serif text-stone-400 dark:text-stone-700 font-bold group-hover:text-gold transition-colors duration-500">
                                            {(member as any).initials || member.name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
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
            </motion.div>

        </section>
    );
};

export default AboutSection;
