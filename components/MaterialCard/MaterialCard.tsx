import React, {useEffect} from "react"

type MaterialCardProps = {
    material: {
        video_id: any,
        previewSrc?: string,
        type: string,
        title: string,
        type_id: number,
        link?:string
    }
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {

    const playVideo = () => {
        if (material.video_id) {
            // @ts-ignore
            var video = Wistia.api(material.video_id);
            video.popover.show();
            video.play();
        }
    }

    return (
        <article className="material-card">
            <div className="material-card__image">
                {material.video_id ?
                    <div className="wistia_responsive_padding">
                        <div className="wistia_responsive_wrapper"
                             style={{height: "100%", left: 0, position: "absolute", top: 0, width: "100%"}}>
            <span
                className={`wistia_embed wistia_async_${material.video_id} popover=true popoverAnimateThumbnail=true videoFoam=true`}
                style={{display: "block", height: "100%", position: "relative", width: "100%"}}>&nbsp;</span>
                        </div>
                    </div> :
                    material.link ? <a href={material.link} target="_blank"><img src={material.previewSrc} alt="Material Image"/></a>
                            : <img src={material.previewSrc} alt="Material Image"/>
                }
            </div>

            <div className="material-card__details">
                { material.type }
            </div>

            <div className="material-card__title">
                { material.link ?
                    <a href={material.link} target="_blank">
                        {material.title}
                    </a> : <span style={{display: "block"}} onClick={playVideo}>{material.title}</span>
                }
            </div>
        </article>
    )
}

export default MaterialCard
