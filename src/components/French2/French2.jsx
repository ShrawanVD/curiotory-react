import React from "react";
import "./French2.css";

import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';




function French2() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    return (

      // this is for the carousel
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );



//   const settings = {
//     dots: false, // Remove pagination
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <div className="slick-next">→</div>,
//     prevArrow: <div className="slick-prev">←</div>,
//   };

//   const data = [
//     {
//       info: {
//         title: "1CEFRL: Common European Framework of Reference for Languages",
//         purpose:
//           "Purpose: Standardized description of French language proficiency",
//         description:
//           "A total of six levels being: A1, A2, B1, B2, C1, and C2, with A1 being the beginner level and C2 the most advanced. Our lessons cover the development of four key skills: Speaking, Reading, Writing, and Listening.",
//       },
//       modules: [
//         {
//           title: "Module 1:",
//           description: "Parler de soi-même",
//           points: ["Les Salutations", "Se Présenter", "S'excuser"],
//         },
//         {
//           title: "Module 2:",
//           description: "Faire la communication",
//           points: [
//             "Demander et expliquer",
//             "L'orientation",
//             "Faire du shopping",
//           ],
//         },
//         {
//           title: "Module 3:",
//           description: "Se situer dans l'espace",
//           points: [
//             "Parler de l'environnement",
//             "Comprendre les directions",
//             "Donner des instructions",
//           ],
//         },
//       ],
//     },
//     {
//       info: {
//         title: "2CEFRL: Common European Framework of Reference for Languages",
//         purpose:
//           "Purpose: Standardized description of French language proficiency",
//         description:
//           "A total of six levels being: A1, A2, B1, B2, C1, and C2, with A1 being the beginner level and C2 the most advanced. Our lessons cover the development of four key skills: Speaking, Reading, Writing, and Listening.",
//       },
//       modules: [
//         {
//           title: "Module 1:",
//           description: "Parler de soi-même",
//           points: ["Les Salutations", "Se Présenter", "S'excuser"],
//         },
//         {
//           title: "Module 2:",
//           description: "Faire la communication",
//           points: [
//             "Demander et expliquer",
//             "L'orientation",
//             "Faire du shopping",
//           ],
//         },
//         {
//           title: "Module 3:",
//           description: "Se situer dans l'espace",
//           points: [
//             "Parler de l'environnement",
//             "Comprendre les directions",
//             "Donner des instructions",
//           ],
//         },
//       ],
//     },
//     {
//       info: {
//         title: "3CEFRL: Common European Framework of Reference for Languages",
//         purpose:
//           "Purpose: Standardized description of French language proficiency",
//         description:
//           "A total of six levels being: A1, A2, B1, B2, C1, and C2, with A1 being the beginner level and C2 the most advanced. Our lessons cover the development of four key skills: Speaking, Reading, Writing, and Listening.",
//       },
//       modules: [
//         {
//           title: "Module 1:",
//           description: "Parler de soi-même",
//           points: ["Les Salutations", "Se Présenter", "S'excuser"],
//         },
//         {
//           title: "Module 2:",
//           description: "Faire la communication",
//           points: [
//             "Demander et expliquer",
//             "L'orientation",
//             "Faire du shopping",
//           ],
//         },
//         {
//           title: "Module 3:",
//           description: "Se situer dans l'espace",
//           points: [
//             "Parler de l'environnement",
//             "Comprendre les directions",
//             "Donner des instructions",
//           ],
//         },
//       ],
//     },
//     // Add more slides as necessary
//   ];

//   return (
//     <div className="curriculum-container">
//       <Slider {...settings}>
//         {data.map((slide, index) => (
//           <div key={index}>
//             <div className="info-section">
//               <h2>{slide.info.title}</h2>
//               <p>{slide.info.purpose}</p>
//               <p>{slide.info.description}</p>
//             </div>
//             <div className="module-section">
//               {slide.modules.map((module, idx) => (
//                 <div className="card" key={idx}>
//                   <div className="module">
//                     <h4>{module.title}</h4>
//                     <p>{module.description}</p>
//                     <ul>
//                       {module.points.map((point, pointIdx) => (
//                         <li key={pointIdx}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );

  //   return (
  //     <div className="curriculum-container">
  //       <div className="info-section">
  //         <h2>CEFRL: Common European Framework of Reference for Languages</h2>
  //         <p>Purpose: Standardized description of French language proficiency</p>
  //         <p>A total of six levels being: A1, A2, B1, B2, C1, and C2, with A1 being the beginner level and C2 the most advanced. Our lessons cover the development of four key skills: Speaking, Reading, Writing, and Listening.</p>
  //       </div>
  //       <div className="carousel-section">
  //         <Slider {...settings}>
  //           <div className="card">
  //             <h3>CEFR - A1</h3>
  //             <div className="module">
  //               <h4>Module 1:</h4>
  //               <p>Parler de soi-même</p>
  //               <ul>
  //                 <li>Les Salutations</li>
  //                 <li>Se Présenter</li>
  //                 <li>S'excuser</li>
  //               </ul>
  //             </div>
  //           </div>
  //           <div className="card">
  //             <h3>CEFR - A1</h3>
  //             <div className="module">
  //               <h4>Module 2:</h4>
  //               <p>Faire la communication</p>
  //               <ul>
  //                 <li>Demander et expliquer</li>
  //                 <li>L'orientation</li>
  //                 <li>Faire du shopping</li>
  //               </ul>
  //             </div>
  //           </div>
  //           <div className="card">
  //             <h3>CEFR - A1</h3>
  //             <div className="module">
  //               <h4>Module 3:</h4>
  //               <p>Se situer dans l'espace</p>
  //               <ul>
  //                 <li>Parler de l'environnement</li>
  //                 <li>Comprendre les directions</li>
  //                 <li>Donner des instructions</li>
  //               </ul>
  //             </div>
  //           </div>
  //         </Slider>
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <div className="review-swiper-css">
  //               <Swiper
  //                 // install Swiper modules
  //                 modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  //                 spaceBetween={20}
  //                 slidesPerView={1}
  //                 // navigation
  //                 // pagination={{ clickable: true }}
  //                 // scrollbar={{ draggable: true }}
  //                 autoplay={{
  //                   delay: 3000,
  //                   disableOnInteraction: false, // Resume autoplay after interaction
  //                 }}
  //                 onSwiper={(swiper) => console.log(swiper)}
  //                 onSlideChange={() => console.log("slide change")}
  //                 breakpoints={{
  //                   // when window width is >= 768px
  //                   768: {
  //                     slidesPerView: 2,
  //                     spaceBetween: 50,
  //                   },
  //                 }}
  //               >
  //                 <SwiperSlide>
  //                   <div className="swiper-slide">
  //                     <div className="profile-picture">
  //                       <img src="/Index/review - swapna.png" alt="Swapna Jain" />
  //                     </div>
  //                     <div className="name">Swapna Jain</div>
  //                     <div className="designation">
  //                       Korean TOPIK 1 Level 1 - Brewer – Maine, US
  //                     </div>
  //                     <div className="reviews">
  //                       <p>
  //                         Being part of a big organization, one of my 2023 goals
  //                         was to learn a foreign language. So, I got to learn from
  //                         Priya Nagpal, my Korean tutor at Curiotory. And what an
  //                         experience it has been! I like everything about the
  //                         course.I would recommend Curiotory and Priya Nagpal to
  //                         everyone!
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </SwiperSlide>
  //                 <SwiperSlide>
  //                   <div className="swiper-slide">
  //                     <div className="profile-picture">
  //                       <img
  //                         src="/Index/review - reeva.png"
  //                         alt="Reeva Arsingha"
  //                       />
  //                     </div>
  //                     <div className="name">Reeva Arsinghakar</div>
  //                     <div className="designation">
  //                       Spanish B1 - Akola Maharashtra
  //                     </div>
  //                     <div className="reviews">
  //                       <p>
  //                         “Firstly, it was a lot of fun to learn with Curiotory.
  //                         The teaching process was perfect, and the tutor ensured
  //                         I was thoroughly engaged. So I enjoyed it a lot! Their
  //                         material helped me a lot too. Moreover, the platform is
  //                         very organized and systematic. It was overall a great
  //                         learning experience.”
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </SwiperSlide>
  //                 <SwiperSlide>
  //                   <div className="swiper-slide">
  //                     <div className="profile-picture">
  //                       <img src="/Index/review - riya.png" alt="Riya Malhotra" />
  //                     </div>
  //                     <div className="name">Riya Malhotra</div>
  //                     <div className="designation">German A1 - Germany</div>
  //                     <div className="reviews">
  //                       <p>
  //                         “The German course was very good. I also found it very
  //                         convenient as I could attend the course per my schedule.
  //                         As I am studying medicine in Germany my language
  //                         knowledge came handy. My tutor, Disha, was kind enough
  //                         to make adjustments many times so that I could easily
  //                         recover whenever I missed a session. I am definitely
  //                         satisfied!”
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </SwiperSlide>
  //                 <SwiperSlide>
  //                   <div className="swiper-slide">
  //                     <div className="profile-picture">
  //                       <img
  //                         src="/Index/review - bhavana.png"
  //                         alt="Bhawana Pawar HR"
  //                       />
  //                     </div>
  //                     <div className="name">Bhawana Pawar HR</div>
  //                     <div className="designation">
  //                       Jabil Manufacturing Pvt. Ltd. - Mandarin (Ranjangaon,
  //                       Maharashtra)
  //                     </div>
  //                     <div className="reviews">
  //                       <p>
  //                         “We are happy to receive Curiotory language service, as
  //                         our teams gained a lot of knowledge. It went a long way
  //                         to help improve their efficiency at work . We hope to
  //                         work again with Curiotory in future &nbsp;.”
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </SwiperSlide>
  //                 ...
  //               </Swiper>
  //             </div>
  //   );

}

export default French2;
