
const aboutItems = [
    {
      label: 'Project done',
      number: 15
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];

const About = () => {
    return(
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 border border-zinc-500/50 rounded-sm md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Samuel, a professional Frontend developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical masterpiece that excels in both appearance and performance.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label,number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-sm ml-auto md:w-[40px] md:h-[40px]">
                            <p className="text-zinc-900 text-lg font-bold md:text-xl">S</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About