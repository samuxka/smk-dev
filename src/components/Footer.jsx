
const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://www.github.com/samuxka'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/samuxka'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/samuka.dev'
    },
];

import * as btn from '../utils/Button'

const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">Let&apos;s work together today!</h2>

                        <btn.ButtonPrimary
                            href="mailto:samuka.dev77@gmail.com"
                            label="Start project"
                            icon="chevron_right"
                            classes="reveal-up"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li
                                        key={key}
                                    >
                                        <a
                                            href={href}
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li
                                        key={key}
                                    >
                                        <a
                                            href={href}
                                            target='_blank'
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a
                        href="#home"
                        className="logo reveal-up"
                    >
                        <p
                            className="w-8 h-8 bg-white text-zinc-900 flex justify-center items-center text-lg font-bold rounded-sm"
                        >S</p>
                    </a>

                    <p className=" text-zinc-500 text-sm reveal-up">
                        &copy; 2025 <span className='text-zinc-200'>smk.dev</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer