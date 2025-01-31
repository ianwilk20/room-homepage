import mobileHero1 from '../assets/images/mobile-image-hero-1.jpg'
import mobileHero2 from '../assets/images/mobile-image-hero-2.jpg'
import mobileHero3 from '../assets/images/mobile-image-hero-3.jpg'
import desktopHero1 from '../assets/images/desktop-image-hero-1.jpg'
import desktopHero2 from '../assets/images/desktop-image-hero-2.jpg'
import desktopHero3 from '../assets/images/desktop-image-hero-3.jpg'
import aboutDark from '../assets/images/image-about-dark.jpg'
import aboutLight from '../assets/images/image-about-light.jpg'
import arrowIcon from '../assets/images/icon-arrow.svg'
import brandLogo from '../assets/images/logo.svg'
import angleLeftIcon from '../assets/images/icon-angle-left.svg'
import angleRightIcon from '../assets/images/icon-angle-right.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import { useState } from 'react'
import { Image } from '../types/Image'

const images: Image[] = [
    { id: 1, mobileImg: mobileHero1, desktopImg: desktopHero1 },
    { id: 2, mobileImg: mobileHero2, desktopImg: desktopHero2 },
    { id: 3, mobileImg: mobileHero3, desktopImg: desktopHero3 },
]

const Homepage = () => {
    const [heroImage, setHeroImage] = useState<Image>(images[0])
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    console.log('heroImage: ', heroImage)

    const nextImage = (): void => {
        setHeroImage((currentImage) => {
            console.log('Current image: ', currentImage)
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
            console.log('Current image: ', currentImage)
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
        <div className="relative">
            <header className="absolute flex left-0 right-0 top-0 z-10 w-full sm:items-center sm:gap-12">
                <img
                    src={brandLogo}
                    className="absolute sm:static top-10 left-0 right-0 ml-auto mr-auto flex sm:block sm:ml-12"
                />
                <nav
                    className={`z-10 sm:flex ${
                        !showMobileMenu && 'hidden'
                    } flex items-center justify-around h-24 bg-white sm:bg-transparent w-full px-2 [&>*]:lowercase [&>*]:font-medium [&>*]:tracking-tighter sm:[&>*]:text-white sm:p-0 sm:justify-start sm:gap-6`}
                >
                    <button
                        className="mr-4 sm:hidden"
                        onClick={(): void => setShowMobileMenu(false)}
                    >
                        <img src={closeIcon} />
                    </button>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                <div className="absolute top-10 flex w-full sm:hidden">
                    <label
                        htmlFor="mobile-menu-box"
                        className="ml-5 basis-[calc(50%-1.25rem)]"
                        onClick={(): void => setShowMobileMenu(true)}
                    >
                        <img src={hamburgerIcon} />
                    </label>
                    <input
                        id="mobile-menu-box"
                        type="checkbox"
                        className="hidden"
                    ></input>
                </div>
            </header>
            <section>
                <div className="relative">
                    {[heroImage].map((item: Image) => (
                        <picture key={item.id}>
                            <source
                                srcSet={item.mobileImg}
                                media="(max-width: 375px)"
                            ></source>
                            <source
                                srcSet={item.desktopImg}
                                media="(min-width: 375px)"
                            ></source>
                            <img src={item.desktopImg} />
                        </picture>
                    ))}
                    <div className="absolute bottom-0 right-0 flex">
                        <button
                            className="bg-black w-12 h-12 flex items-center justify-center"
                            onClick={prevImage}
                        >
                            <img src={angleLeftIcon} className="w-[0.55rem]" />
                        </button>
                        <button
                            className="bg-black w-12 h-12 flex items-center justify-center"
                            onClick={nextImage}
                        >
                            <img src={angleRightIcon} className="w-[0.55rem]" />
                        </button>
                    </div>
                </div>
                <div className="py-12 px-6">
                    <h1 className="text-4xl font-semibold tracking-tighter leading-8">
                        Discover innovative ways to decorate
                    </h1>
                    <p className="pt-4 pb-8 text-sm text-gray-600">
                        We provide unmatched quality, comfort, and style for
                        property owners across the country. Our experts combine
                        form and function in bringing your vision to life.
                        Create a room in your own style with our collection and
                        make your property a reflection of you and what you
                        love.
                    </p>
                    <a
                        href="#"
                        className="flex items-center gap-2 tracking-[0.5rem] font-medium text-sm uppercase"
                    >
                        Shop now <img src={arrowIcon} />
                    </a>
                </div>
            </section>
            <section>
                <img src={aboutDark} />
                <div className="py-8 px-6">
                    <h2 className="text-sm font-bold tracking-[0.275rem] uppercase leading-8">
                        About our furniture
                    </h2>
                    <p className="pt-2 text-sm text-gray-600">
                        Our multifunctional collection blends design and
                        function to suit your individual taste. Make each room
                        unique, or pick a cohesive theme that best express your
                        interests and what inspires you. Find the furniture
                        pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are
                        available to help you create your dream space.
                    </p>
                </div>
                <img src={aboutLight} />
            </section>
        </div>
    )
}

export default Homepage
