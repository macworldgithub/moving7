import React from "react";
import Footer from "../footer/footer";

const VideoPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <iframe
          className="w-[90%]   max-sm:h-52  h-[100vh]  mt-10 rounded-2xl"
          src="https://www.youtube.com/embed/kT8neJPDoLA?si=toS4HzAgJW1Locv5"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="mt-10 mx-5 md:mx-20 mb-20">
        <h1 className="text-heading  font-medium mb-5">
          Why Marketplaces like Moving7 are Essential:
        </h1>
        <p className="text-para  font-light 2xl:mr-[14rem]">
          Access to a Larger Customer Base: Service providers can benefit from a
          marketplace by gaining access to a broader audience of potential
          customers who are actively seeking the services they offer.
        </p>

        <ul className="list-disc gap-1 flex flex-col text-para list-outside mt-3">
          <li>
            <span className="font-bold text-para">Increased Visibility: </span>{" "}
            Reach a broader audience and attract new clients by being featured
            on a high-traffic service provider marketplace.
          </li>
          <li>
            <span className="font-bold text-para">
              Competition and Differentiation:{" "}
            </span>{" "}
            Showcase unique offerings, customer reviews, and competitive pricing
            to stand out among other providers.
          </li>
          <li>
            <span className="font-bold text-para">
              Efficient Client Acquisition:{" "}
            </span>{" "}
            Streamline the process of acquiring new clients as customers can
            easily find and book your services.
          </li>
          <li>
            <span className="font-bold text-para">
              Feedback and Improvement:{" "}
            </span>{" "}
            Leverage feedback and rating systems to evaluate satisfaction,
            identify areas for improvement, and build a positive reputation.
          </li>
          <li>
            <span className="font-bold text-para">
              Centralized Platform Benefits:{" "}
            </span>{" "}
            Enjoy a transparent, efficient platform that helps both consumers
            and providers discover, compare, and access a variety of services.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
