
import { Icon } from "@iconify/react/dist/iconify.js"
import PropTypes from "prop-types"

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
    return (
        <div className={"relative p-4 rounded-sm bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " + classes}>
            <figure className="img-box aspect-square rounded-sm mb-4">
                <img
                    src={imgSrc}
                    alt={title}
                    loading='lazy'
                    className="img-cover"
                />
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">{title}</h3>
                    <div className="flex flex-wrap items-center gap-1">
                        {tags.map((label, key) => (
                            <span
                                key={key}
                                className="p-1 grid items-center rounded-sm"
                            >
                                <Icon icon={`${label}`} width={19.515}/>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="w-14 h-14 rounded-sm grid place-items-center bg-zinc-700/50 shrink-0">
                    <span 
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        <Icon icon="fluent-emoji:eyes"/>
                    </span>
                </div>

                <a 
                    href={projectLink}
                    target="_blank"
                    className="absolute inset-0"
                ></a>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string,
}

export default ProjectCard