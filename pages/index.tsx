import React from "react"
import {gsap} from "gsap"
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin"
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import Materials from "../components/Materials/Materials"

import SwiperCore, {Pagination} from "swiper"

import SecretMaterials from "../public/SecretMaterials.json"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

SwiperCore.use([Pagination])


const Home: React.FC = () => {

    return (
        <>
            <Materials title="Videos"
                       materials={SecretMaterials}
                       aFilter={-1}
                       showPerPage={4}
                       clinicalCase={'covboy'}
            />
        </>
    )
}

export default Home
