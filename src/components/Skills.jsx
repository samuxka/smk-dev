
import SkillCard from "../utils/SkillCard";

const skillItem = [
    {
      skicon: 'javascript',
      label: 'Javascript',
      desc: 'Interaction'
    },
    {
      skicon: 'react-dark',
      label: 'React js',
      desc: 'Framework'
    },
    {
      skicon: 'nodejs-dark',
      label: 'Node js',
      desc: 'Backend tool'
    },
    {
      skicon: 'typescript',
      label: 'Typescript',
      desc: 'Backend tool'
    },
    {
      skicon: 'tailwindcss-dark',
      label: 'Tailwindcss',
      desc: 'User Interface'
    },
    {
      skicon: 'git',
      label: 'Git',
      desc: 'Version control tool'
    },
    {
      skicon: 'github-dark',
      label: 'GitHub',
      desc: 'Repository hosting tool'
    },
    {
      skicon: 'supabase-dark',
      label: 'Supabase',
      desc: 'Database'
    },
  ];

const Skills = () => {
    return(
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">Discover the powerful tools and technologies I use to create exceptional solution for you.</p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">{skillItem.map(({skicon,label,desc},key) => (
                    <SkillCard
                        key={key}
                        skicon={skicon}
                        label={label}
                        desc={desc}
                        classes="reveal-up"
                    />
                ))}</div>
            </div>
        </section>
    )
}

export default Skills