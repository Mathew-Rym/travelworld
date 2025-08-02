import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slideToScroll:2,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>Our family safari with Travel World Kenya was absolutely magical! The guides were incredibly knowledgeable about the wildlife and made sure we saw the Big Five. The Great Migration in the Maasai Mara was a once-in-a-lifetime experience we'll never forget.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">James Wilson</h6>
                    <p>From United States</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Diani Beach was paradise on earth! The white sand, turquoise waters, and amazing marine life made our honeymoon unforgettable. The team at Travel World Kenya arranged everything perfectly - from the beachfront villa to the romantic dhow dinner cruise.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Sarah Johnson</h6>
                    <p>From United Kingdom</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Climbing Mount Kenya was challenging but absolutely worth it! The guides from Travel World Kenya were professional and made sure we were safe throughout the trek. Waking up to the sunrise at Point Lenana was one of the most breathtaking moments of my life.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">David Kim</h6>
                    <p>From South Korea</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Climbing Mount Kenya was challenging but absolutely worth it! The guides from Travel World Kenya were professional and made sure we were safe throughout the trek. Waking up to the sunrise at Point Lenana was one of the most breathtaking moments of my life.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">David Kim</h6>
                    <p>From South Korea</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Climbing Mount Kenya was challenging but absolutely worth it! The guides from Travel World Kenya were professional and made sure we were safe throughout the trek. Waking up to the sunrise at Point Lenana was one of the most breathtaking moments of my life.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">David Kim</h6>
                    <p>From South Korea</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials