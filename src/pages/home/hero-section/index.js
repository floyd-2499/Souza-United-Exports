import { useEffect, useState } from "react"
import { Carousel } from "antd/dist/antd"
import Image from "next/image"

import styles from "./styles.module.scss";
import HeroKitchenCountertop from "./assets/hero-kitchen-countertop.png"
import NetBg from "../../../assets/Net-BG.svg"
import classNames from "classnames";
import { uris } from "@/library/uris";
import { useRouter } from "next/router";

const carouselContents = [
    {
        id: 1,
        title: "Elevate Your Kitchen",
        description: "Discover our premium granite countertops, crafted for timeless elegance and durability.",
        // button: "Explore Kitchen Granite",
        button: "Explore Collections",
        image: HeroKitchenCountertop,
        redirect: uris?.product,
        position: "left"
    },
    {
        id: 2,
        title: "Transform Your Bathroom",
        description: "Create a spa-like retreat with our luxurious granite surfaces.",
        // button: "View Bathroom Collection",
        button: "Explore Collections",
        image: "https://drive.google.com/file/d/17pWZWGxjqmyNjk9gBbOq9tkmB9OMX8ug/view?usp=drive_link",
        redirect: uris?.product,
        position: "right"
    },
    {
        id: 3,
        title: "Enhance Your Outdoor Spaces",
        description: "From patios to garden paths, explore our durable and stylish granite options.",
        // button: "Discover Outdoor Granite",
        button: "Explore Collections",
        image: "https://drive.google.com/file/d/1K6AZDfN8vs2r69dcaVdhYLBNZJJD_JyF/view?usp=drive_link",
        redirect: uris?.product,
        position: "left"
    },
    {
        id: 4,
        title: "Discover Rare Beauty",
        description: "Explore our collection of exotic and unique granite for distinctive projects.",
        // button: "Browse Exotic Granite",
        button: "Explore Collections",
        image: "https://drive.google.com/file/d/1zj30VbkFO1FpM1YfehOAj_Gr3KPq_bUg/view?usp=drive_link",
        redirect: uris?.product,
        position: "right"
    },
    {
        id: 5,
        title: "Tailored to Your Vision",
        description: "Get custom granite solutions designed to match your unique style and requirements.",
        // button: "Request a Custom Order",
        button: "Explore Collections",
        image: HeroKitchenCountertop,
        redirect: uris?.product,
        position: "left",
    }

]

const HeroSectionMain = () => {
    const router = useRouter()

    const handleNavigate = (redirect) => {
        router.push(redirect)
    }


    return (
        <div className={styles["hero-section-main"]}>
            <Carousel autoplay autoplaySpeed={5000} arrows infinite dotPosition="bottom">
                {carouselContents?.map((content) => {
                    return (
                        <div key={content?.id} className={classNames(styles["carousel-page"], styles[content?.position])}>
                            <div className={styles["carousel-text-section"]}>
                                <div className={styles["text-contents"]}>
                                    <div className={styles["main-text"]}>{content?.title}</div>
                                    <div className={styles["description"]}>{content?.description}</div>
                                    <div className={styles["button"]} onClick={() => handleNavigate(content?.redirect)}>{content?.button}</div>
                                </div>
                                <div className={styles["text-background"]}>
                                    <Image alt="Souza United Export Background" src={NetBg} width={100} height={100} />
                                </div>
                            </div>
                            <div className={styles["carousel-image-section"]}>
                                <Image alt={content?.title} src={content?.image} width={100} height={100} />
                            </div>
                        </div>
                    )
                })}

            </Carousel>

        </div>
    )
}

export default HeroSectionMain