// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import help from "../assets/man and woman.png";
import man from "../assets/Man-Bro.png";
import woman from "../assets/Woman.png";

const CoverPage = () => {
  const homeImages = [help, man, woman];
  // State to track the index of the current image being displayed //

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State to control whether the transition effect is active //

  const [isTransitioning, setIsTransitioning] = useState(false);

  // useEffect hook to handle the image transition logic
  useEffect(() => {
    // Set up an interval to change the images every ... 2.5sec //
    const animation = setInterval(() => {
      setIsTransitioning(true); //Start the transition effect

      // After 0.5 sec, update the current image index and stop the transitioning effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          // Calculate the next image index (loop back to the first image if at the gets to the end)
          return (prevIndex + 1) % homeImages.length;
        });

        setIsTransitioning(false); // End the transition effect
      }, 500);
    }, 2500);

    return () => {
      clearInterval(animation);
    };
  }, [homeImages.length]); // Dependency Array to re-run the effect if the length of homeImages changes

  // ===============================================================
  return (
    <main className="homepage-con">
      <div className="home-content">
        {/* ========================== */}
        <div className=" home-text text-start">
          <h1 className="m-0">
            Manage your Tasks on <span>TaskDuty</span>
          </h1>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link className="home-a" to="/tasks">
            Go to My Tasks
          </Link>
        </div>
        {/* =========================== */}
        {/* =========================== */}
        {/* =========================== */}
        <div className="home-img">
          {/* Applying the change className if transitioning is true and removing "change" when its false  */}
          <img
            className={`illu ${isTransitioning ? "change" : ""}`}
            src={homeImages[currentImageIndex]}
            alt=""
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
        {/* =========================== */}
      </div>
    </main>
  );
};

export default CoverPage;
