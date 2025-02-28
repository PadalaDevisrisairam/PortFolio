import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
    {
        image: "nptelpython.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/NPTEL%20PYTHON%20CERTIFICATE.pdf",
        name: "NPTEL Python Certificate",
    },
    {
        image: "npteljava.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/NPTEL%20JAVA%20CERTIFICATE.pdf",
        name: "NPTEL Java Certificate",
    },
    {
        image: "infosyshtmlcss.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/INFOSYS%20HTML%26CSS%20CERTIFICATE.pdf",
        name: "Infosys HTML & CSS Certificate",
    },
    {
        image: "infosysmongodb.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/Certificate%20MONGODB.pdf",
        name: "Infosys MongoDB Certificate",
    },
];

const certifications2 = [
    {
        image: "juniper.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/AICTE%20JUNIPER%20CERTIFICATE.pdf",
        name: "Juniper Certificate",
    },
    {
        image: "paloalto.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/AICTE%20PALO%20ALTO%20CERTIFICATE.pdf",
        name: "Paloalto Certificate",
    },
    {
        image: "skilldezire.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/SKILL%20DZIRE%20MACHINE%20LEARNING%20WORKSHOP.pdf",
        name: "Skilldezire Certificate",
    },
    {
        image: "wipro.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/WIPRO%20ELEWAYTE%20AI%20CERTIFICATE.pdf",
        name: "wipro Certificate",
    },
    {
        image: "zedio.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/ZIDIO%20INTERNSHIP%20CERTIFICATE.pdf",
        name: "zidio Certificate",
    },
];

const certifications3 = [
    {
        image: "sasidevops.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/sasi-koyya-devops.pdf",
        name: "devops-sasi Certificate",
    },
    {
        image: "srkrdevops.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/Workshop%20%26%20Hackathon%20Certificates.pdf",
        name: "NPTEL Java Certificate",
    },
    {
        image: "avinashmada.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/FREEDOM%20WITH%20AI%20CERTIFICATE.pdf",
        name: "generative AI Certificate",
    },
    {
        image: "mernstack.png",
        link: "https://github.com/PadalaDevisrisairam/MyCertifications/blob/main/koyya%20workshop%20.jpg",
        name: "Infosys MongoDB Certificate",
    },
];

const CertificationItem = ({ cert }) => (
    <div className="p-4">
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
            <div className="relative group rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-800 p-4">
                <img
                    src={cert.image}
                    alt={cert.name}
                    className="rounded-lg transition-transform transform hover:scale-105 border-4 border-yellow-400"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <span className="text-white text-lg font-bold">{cert.name}</span>
                </div>
            </div>
        </a>
    </div>
);

const Certificationpage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 md:px-20 py-10">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 text-center">Certifications</h1>

                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300 text-left">Language Certifications</h2>
                    <Slider {...settings}>
                        {certifications.map((cert, index) => (
                            <CertificationItem key={index} cert={cert} />
                        ))}
                    </Slider>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300 text-left">Internship Certifications</h2>
                    <Slider {...settings}>
                        {certifications2.map((cert, index) => (
                            <CertificationItem key={index} cert={cert} />
                        ))}
                    </Slider>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300 text-left">Workshop Certifications</h2>
                    <Slider {...settings}>
                        {certifications3.map((cert, index) => (
                            <CertificationItem key={index} cert={cert} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Certificationpage;