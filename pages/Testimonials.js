import React, { useState, useEffect } from "react";
import Image from "next/image";
import qtleft from "../public/img/quote-sign-left.png";
import qtright from "../public/img/quote-sign-right.png";
import testim1 from "../public/img/testimonial-1.jpeg";
import testim2 from "../public/img/testimonial-2.jpeg";
import testim3 from "../public/img/testimonial-3.jpeg";
import testim4 from "../public/img/testimonial-4.jpeg";
import testim5 from "../public/img/testimonial-5.jpeg";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      author: "Saul Goodman",
      role: "Ceo & Founder",
      image: testim1,
    },
    {
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      author: "Sara Wilsson",
      role: "Designer",
      image: testim2,
    },
    {
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      author: "Jena Karlis",
      role: "Store Owner",
      image: testim3,
    },
    {
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      author: "Matt Brandon",
      role: "Freelancer",
      image: testim4,
    },
    {
      quote:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      author: "John Larson",
      role: "Entrepreneur",
      image: testim5,
    },
  ];

  const [numVisibleTestimonials, setNumVisibleTestimonials] = useState(3);
  const [numNavigationButtons, setNumNavigationButtons] = useState(2);
  const [activeTestimonial, setActiveTestimonial] = useState(1);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 390) {
        setNumVisibleTestimonials(1);
        setNumNavigationButtons(5);
      } else if (window.innerWidth < 820) {
        setNumVisibleTestimonials(2);
        setNumNavigationButtons(3);
      } else {
        setNumVisibleTestimonials(3);
        setNumNavigationButtons(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [testimonials.length]);

  const handleNavigationButtonClick = (index) => {
    setActiveTestimonial(index * numVisibleTestimonials);
  };

  return (
    <section id="testimonials" className="wow fadeInUp">
      <style jsx>{`
    
    .section-header {
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
    }

    .section-header h2 { 
        display: inline-block;
        color: #0c2e8a;
    }

        .testimonials-carousel {
    display: flex;
    justify-content: center;
  }

  .testimonial-nav {
          display: flex;
          justify-content: center;
          margin-bottom: 15px;
        }

        .testimonial-nav button {
          width: 20px;
          height: 20px;
          color: #50d8af;
          background-color: #50d8af;
          border-radius: 50%;
        }

        .testimonial-nav button.active {
          background-color: transparent;
        }

  .testimonial-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 0 15px;
    max-width: 300px;
    transition: transform 0.3s ease;
  }

  .testimonial-item:hover {
  transform: translateY(-15px); /* Move the box 5 pixels up */

  .testimonial-item p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .testimonial-item h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .testimonial-item h4 {
    font-size: 14px;
    font-weight: 400;
    color: #777777;
  }

  .testimonial-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-bottom: 15px;
    object-fit: cover;
      }

  .quote-sign-left,
  .quote-sign-right {
    width: 30px;
    height: 30px;
  }

        }

        @media (max-width: 767px) {
          .testimonials-carousel {
            justify-content: flex-start;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }

          .testimonial-item {
            scroll-snap-align: start;
            flex-shrink: 0;
            margin-right: 10px;
          }
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .testimonials-carousel {
            justify-content: center;
          }

          .testimonial-item {
            margin: 0 10px;
          }
        }

        @media (min-width: 992px) {
          .testimonials-carousel {
            justify-content: center;
          }

          .testimonial-item {
            margin: 0 15px;
          }
        }
      `}</style>
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <br />
          <br />
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>
        <br />
        <br />
        <div className="testimonials-carousel">
          {testimonials
          .slice(activeTestimonial, activeTestimonial + numVisibleTestimonials)
          .map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item ${
                index >= activeTestimonial &&
                index < activeTestimonial + numVisibleTestimonials
                  ? "active"
                  : "disable"
              }`}
            >
              <p>
                <Image
                  src={qtleft}
                  className="quote-sign-left"
                  alt="quote sign left"
                />
                {testimonial.quote}
                <Image
                  src={qtright}
                  className="quote-sign-right"
                  alt="quote sign right"
                />
              </p>
              <Image
                src={testimonial.image}
                alt="testimonial"
                className="testimonial-img"
                width={110}
                height={110}
                style={{ borderRadius: "50%" }}
              />
              <h3>{testimonial.author}</h3>
              <h4>{testimonial.role}</h4>
            </div>
          ))}
          
        </div>
        <br />

        <div className="testimonial-nav">
  {Array.from({ length: numNavigationButtons }, (_, index) => (
    <button key={index}
    onClick={() => handleNavigationButtonClick(index)}
    className={index === activeTestimonial / numVisibleTestimonials ? 'active' : 'disabled'}
    ></button>
  ))}
</div>
      </div>
    </section>
  );
}
