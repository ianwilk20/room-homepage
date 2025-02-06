import mobileHero1 from '../assets/images/mobile-image-hero-1.jpg'
import mobileHero2 from '../assets/images/mobile-image-hero-2.jpg'
import mobileHero3 from '../assets/images/mobile-image-hero-3.jpg'
import desktopHero1 from '../assets/images/desktop-image-hero-1.jpg'
import desktopHero2 from '../assets/images/desktop-image-hero-2.jpg'
import desktopHero3 from '../assets/images/desktop-image-hero-3.jpg'
import aboutDark from '../assets/images/image-about-dark.jpg'
import aboutLight from '../assets/images/image-about-light.jpg'
import brandLogo from '../assets/images/logo.svg'
import angleLeftIcon from '../assets/images/icon-angle-left.svg'
import angleRightIcon from '../assets/images/icon-angle-right.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import { useState } from 'react'
import { Image } from '../types/Image'

const images: Image[] = [
    {
        id: 1,
        mobileImg: mobileHero1,
        desktopImg: desktopHero1,
        alt: 'Two white-back chairs with wooden legs at a table with a bonsai tree',
    },
    {
        id: 2,
        mobileImg: mobileHero2,
        desktopImg: desktopHero2,
        alt: 'Three chairs; one orange, one dark grey-green, one light gray',
    },
    {
        id: 3,
        mobileImg: mobileHero3,
        desktopImg: desktopHero3,
        alt: 'One foldable black chair',
    },
]

const Homepage = () => {
    const [heroImage, setHeroImage] = useState<Image>(images[0])
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    const nextImage = (): void => {
        setHeroImage((currentImage) => {
            if (currentImage.id === images.length) {
                return images[0]
            }
            return (
                images.find((image) => image.id === currentImage.id + 1) ||
                images[0]
            )
        })
    }

    const prevImage = (): void => {
        setHeroImage((currentImage) => {
            if (currentImage.id === 1) {
                return images[images.length - 1]
            }
            return (
                images.find((image) => image.id === currentImage.id - 1) ||
                images[0]
            )
        })
    }

    return (
        <div>
            <header className="absolute flex left-0 right-0 top-0 z-10 w-full sm:items-center sm:gap-12">
                <img
                    src={brandLogo}
                    className="absolute sm:static top-10 left-0 right-0 ml-auto mr-auto flex sm:block sm:ml-12"
                    alt="Room brand logo"
                />
                <nav
                    className={`z-20 sm:flex ${
                        !showMobileMenu && 'hidden'
                    } flex items-center justify-around h-24 bg-white sm:bg-transparent w-full px-2 [&>*]:lowercase [&>*]:font-medium [&>*]:tracking-tighter sm:[&>*]:text-white sm:p-0 sm:justify-start sm:gap-6`}
                >
                    <button
                        className="mr-4 sm:hidden"
                        onClick={(): void => setShowMobileMenu(false)}
                    >
                        <img src={closeIcon} alt="Close navigation menu" />
                    </button>
                    <a
                        href="#"
                        className="mt-0.5 mb-0.5 sm:hover:after:content-[''] sm:hover:after:w-[75%] sm:hover:after:flex sm:hover:after:h-0.5 sm:hover:after:bg-white sm:hover:after:ml-auto sm:hover:after:mr-auto sm:after:w-0 sm:after:opacity-0 sm:hover:after:opacity-100 sm:after:transition-[all_1s]"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="mt-0.5 mb-0.5 sm:hover:after:content-[''] sm:hover:after:w-[75%] sm:hover:after:flex sm:hover:after:h-0.5 sm:hover:after:bg-white sm:hover:after:ml-auto sm:hover:after:mr-auto sm:after:w-0 sm:after:opacity-0 sm:hover:after:opacity-100 sm:after:transition-[all_1s]"
                    >
                        Shop
                    </a>
                    <a
                        href="#"
                        className="mt-0.5 mb-0.5 sm:hover:after:content-[''] sm:hover:after:w-[75%] sm:hover:after:flex sm:hover:after:h-0.5 sm:hover:after:bg-white sm:hover:after:ml-auto sm:hover:after:mr-auto sm:after:w-0 sm:after:opacity-0 sm:hover:after:opacity-100 sm:after:transition-[all_1s]"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="mt-0.5 mb-0.5 sm:hover:after:content-[''] sm:hover:after:w-[75%] sm:hover:after:flex sm:hover:after:h-0.5 sm:hover:after:bg-white sm:hover:after:ml-auto sm:hover:after:mr-auto sm:after:w-0 sm:after:opacity-0 sm:hover:after:opacity-100 sm:after:transition-[all_1s]"
                    >
                        Contact
                    </a>
                </nav>
                <div className="absolute top-10 flex w-full sm:hidden">
                    <label
                        htmlFor="mobile-menu-box"
                        className="ml-5 basis-[calc(50%-1.25rem)]"
                        onClick={(): void => setShowMobileMenu(true)}
                    >
                        <img src={hamburgerIcon} alt="Open navigation menu" />
                    </label>
                    <input
                        id="mobile-menu-box"
                        type="checkbox"
                        className="hidden"
                    ></input>
                </div>
            </header>
            <div
                className={`absolute top-0 left-0 h-full w-full ${
                    !showMobileMenu && 'hidden'
                } bg-black/15 z-[5]`}
                onClick={() => setShowMobileMenu(false)}
            ></div>
            <section className="md:grid md:grid-cols-[60%_40%] md:grid-rows-[90%_10%] md:max-h-[80vh]">
                <div className="relative md:row-start-1 md:row-end-3">
                    <div className="h-full w-full">
                        {images &&
                            heroImage &&
                            images.map((image) => (
                                <picture key={image.id}>
                                    <source
                                        srcSet={image.mobileImg}
                                        media="(max-width: 375px)"
                                    ></source>
                                    <source
                                        srcSet={image.desktopImg}
                                        media="(min-width: 375px)"
                                    ></source>
                                    <img
                                        src={image.desktopImg}
                                        className={`${
                                            heroImage.id === image.id
                                                ? 'block'
                                                : 'hidden'
                                        } md:h-full md:w-full object-cover`}
                                        alt={image.alt}
                                    />
                                </picture>
                            ))}
                    </div>
                    <div className="absolute bottom-0 right-0 flex md:translate-x-24 lg:translate-x-32">
                        <button
                            className="bg-black hover:bg-gray-700 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center"
                            onClick={prevImage}
                        >
                            <img
                                src={angleLeftIcon}
                                className="w-[0.55rem] lg:w-[0.65rem]"
                                alt="Previous image"
                            />
                        </button>
                        <button
                            className="bg-black hover:bg-gray-700 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center"
                            onClick={nextImage}
                        >
                            <img
                                src={angleRightIcon}
                                className="w-[0.55rem] lg:w-[0.65rem]"
                                alt="Next image"
                            />
                        </button>
                    </div>
                </div>
                <div className="py-12 px-6 md:py-20 md:px-14 md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 md:flex md:flex-col md:justify-center md:self-center xl:px-20">
                    <h1 className="text-4xl font-semibold tracking-tighter leading-8 lg:text-5xl lg:leading-10 2xl:text-6xl 2xl:leading-12">
                        Discover innovative ways to decorate
                    </h1>
                    <p className="pt-4 pb-8 text-sm text-gray-600 font-medium">
                        We provide unmatched quality, comfort, and style for
                        property owners across the country. Our experts combine
                        form and function in bringing your vision to life.
                        Create a room in your own style with our collection and
                        make your property a reflection of you and what you
                        love.
                    </p>
                    <a
                        href="#"
                        className="flex items-center gap-2 tracking-[0.5rem] font-medium text-sm uppercase hover:text-gray-600 fill-black hover:fill-gray-600"
                    >
                        <span>shop now</span>
                        <svg
                            width="40"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-inherit"
                        >
                            <path
                                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                                className="fill-inherit"
                                fillRule="nonzero"
                            />
                        </svg>
                    </a>
                </div>
            </section>
            <section className="md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_1fr] md:items-center xl:grid-cols-[1.45fr_1.75fr_1.45fr] xl:grid-rows-[1fr]">
                <img
                    src={aboutDark}
                    className="w-full md:h-full md:row-start-1 md:col-start-3 md:row-span-1 xl:col-start-1"
                    alt="Two black chairs placed around a coffee table"
                />
                <div className="py-8 px-6 md:row-start-1 md:row-span-2 md:col-span-2 md:object-cover xl:col-start-2 xl:col-span-1 xl:py-20 xl:px-12">
                    <h2 className="text-sm font-bold tracking-[0.275rem] uppercase leading-8 lg:text-md xl:text-lg">
                        About our furniture
                    </h2>
                    <p className="pt-2 text-sm text-gray-600 font-medium">
                        Our multifunctional collection blends design and
                        function to suit your individual taste. Make each room
                        unique, or pick a cohesive theme that best express your
                        interests and what inspires you. Find the furniture
                        pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are
                        available to help you create your dream space.
                    </p>
                </div>
                <img
                    src={aboutLight}
                    className="w-full md:h-full md:row-start-2 md:object-cover xl:col-start-3 xl:row-start-1"
                    alt="One white chair in a white room"
                />
            </section>
        </div>
    )
}

export default Homepage
