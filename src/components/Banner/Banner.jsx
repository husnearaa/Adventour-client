
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";


const slides = [
    {
        id: 2,
        title: "A website where you will get traveling place package",
        subtitle: ["Are You Planning To", "Contact World Renowed Health Care Consultant"],
        imageUrl: "https://i.postimg.cc/xdmjW7Ph/pexels-gustavo-fring-4173251.jpg",
    },
    {
        id: 1,
        title: "A website where you will get best tourist packages everything",
        subtitle:
            ["", "Leading the way in healthcare with advanced medical equipment and cutting-edge hospital construction."],
        imageUrl: "/national-cancer-institute-oCLuFi9GYNA-unsplash.jpg",
    },
    {
        id: 3,
        title: "A website where you will get best tourist everything",
        subtitle:
            ["", "Supplying high-quality office equipment designed to enhance productivity and comfort."],
        imageUrl: "/benjamin-child-0sT9YhNgSEs-unsplash.jpg",
    },
    {
        id: 4,
        title: "A website where you will get best tourist package idea",
        subtitle:
            ["", "Tailoring healthcare environments to meet the unique needs of each client."],
        imageUrl: "/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    },
    {
        id: 5,
        title: "A website where you will get all there travels packages",
        subtitle:
            ["", "Providing ergonomic office solutions that improve well-being and efficiency."],
        imageUrl: "/adolfo-felix-PG8NyM_Mcts-unsplash.jpg",
    },
];

const Banner = () => {
    return (
        <Carousel
            className="min-h-[70dvh] w-full"
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 4500,
                }),
            ]}
        >
            <CarouselContent>
                {slides?.map((slide) => (
                    <CarouselItem key={slide.id}>
                        <div className="relative h-svh w-full bg-si-secondary">
                            <div
                                className="absolute inset-0 bg-cover"
                                style={{
                                    backgroundImage: `url(${slide.imageUrl})`,
                                }}
                            />
                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            {/* Content */}
                            <div className="relative flex h-full flex-col items-center justify-center gap-5 text-center">
                                <h4 className="mx-auto max-w-sm  text-balance text-base font-medium text-muted md:max-w-lg lg:max-w-2xl lg:text-xl">
                                    {slide.subtitle[0]}
                                </h4>
                                <h2 className="text-balance text-3xl  font-semibold text-muted md:text-5xl lg:text-6xl">
                                    {slide.title}
                                </h2>
                                <h4 className="mx-auto max-w-sm text-balance text-base font-medium text-muted md:max-w-lg lg:max-w-2xl lg:text-xl">
                                    {slide.subtitle[1]}
                                </h4>
                                <div>
                                    <Button>Get Started</Button>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export default Banner;