import { Icon } from "@iconify/react/dist/iconify.js"
import DecryptText from "../utils/Decrypt"
import * as btn from "../utils/Button"

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-28 reveal-up">

            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 reveal-up">
                <div>
                    <div className="flex items-center gap-3 reveal-up">
                        <figure className="img-box w-9 h-9 rounded-lg reveal-up">
                            <img
                                src="/images/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="Samuka dev portait"
                                className="img-cover reveal-up"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide reveal-up">
                            <span className="relative w-2 h-2 rounded-full bg-green-400 reveal-up">
                                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping reveal-up"></span>
                            </span>

                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 reveal-up">
                        <DecryptText finalText="<Hello, World!/>" speed={100} />
                        The Developer You&apos;ve Been Searching For
                        <Icon icon="fluent-emoji:teacup-without-handle" width="50" height="50" />
                    </h2>

                    <div className="flex gap-3 items-center reveal-up">
                        <btn.ButtonPrimary
                            label="Download CV"
                            icon="download"
                            href="/images/samuel.pdf"
                        />

                        <btn.ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block reveal-up">
                    <figure className="w-full max-w-[480px] ml-auto overflow-hidden reveal-up relative">
                        <img
                            src="/images/hero-banner.png"
                            width={656}
                            height={800}
                            alt="Samuka dev"
                            className="w-full reveal-up"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-10% to-35% to-transparent"></div>
                    </figure>
                </div>
            </div>

        </section>
    )
}

export default Hero