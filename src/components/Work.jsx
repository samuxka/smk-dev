import ProjectCard from "../utils/ProjectCard";

const works = [
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Comming soon',
        tags: ['API', 'MVC', 'Development'],
        projectLink: '/'
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Comming soon',
        tags: ['API', 'SPA'],
        projectLink: '/'
    },
    {
        imgSrc: '/images/project-3.jpg',
        title: 'Comming soon',
        tags: ['Development', 'API'],
        projectLink: '/'
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Comming soon',
        tags: ['Web-design', 'Development'],
        projectLink: '/'
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'Comming soon',
        tags: ['eCommerce', 'Development'],
        projectLink: '/'
    },
    {
        imgSrc: '/images/project-6.jpg',
        title: 'Comming soon',
        tags: ['Web-design', 'Development'],
        projectLink: '#'
    },
];

const Work = () => {
    return (
        <section className="section reveal-up" id="work">
            <div className="container reveal-up">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] reveal-up">
                    {works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work