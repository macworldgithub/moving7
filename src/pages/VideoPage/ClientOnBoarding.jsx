import React from "react";
import Footer from "../footer/footer";

const ClientBoarding = () => {
  return (
    <div>
      <div className="flex justify-center">
        <iframe
          className="w-[90%]  max-sm:h-52 h-[100vh] mt-10 rounded-2xl"
          src="https://www.youtube.com/embed/6DWCzR4KxpQ?si=Y9IYaQVHb9jZBo00"
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

        <ul className="list-disc flex flex-col gap-1 text-para list-outside mt-3">
          <li>
            <span className="font-bold text-para">Convenience: </span> Moving
            marketplaces like Moving7 provide a platform where users can compare
            prices from different moving companies, saving time and effort.
          </li>
          <li>
            <span className="font-bold text-para">Transparency: </span> Users
            can see and compare prices, services, and reviews from multiple
            companies, helping them avoid hidden costs and unreliable services.
          </li>
          <li>
            <span className="font-bold text-para">Competition: </span> By
            fostering competition, these marketplaces drive innovation and
            improve service quality, giving consumers better options at
            competitive prices.
          </li>
          <li>
            <span className="font-bold text-para">Cost Savings: </span>{" "}
            Comparing prices helps users find cost-effective options, allowing
            them to stay within budget.
          </li>
          <li>
            <span className="font-bold text-para">Quality Assurance: </span>{" "}
            Reviews and ratings offer insights into the quality of service,
            helping users choose reputable companies.
          </li>
          <li>
            <span className="font-bold text-para">Efficiency: </span> Users can
            request quotes, compare options, and book services online,
            streamlining the process of planning a move.
          </li>
          <li>
            <span className="font-bold text-para">Market Access: </span> Smaller
            or lesser-known moving companies can reach a wider audience, giving
            consumers more options.
          </li>
          <li>
            <span className="font-bold text-para">Risk Reduction: </span> Price
            comparisons, reviews, and ratings help users mitigate risks,
            ensuring a smoother moving experience.
          </li>
        </ul>

        <p className="text-para  font-light 2xl:mr-[14rem]">
          By offering a centralized platform for comparing prices and services,
          moving marketplaces like Moving7.com play a crucial role in improving
          the overall moving experience for consumers while contributing to a
          more competitive and efficient moving industry.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ClientBoarding;
