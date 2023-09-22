"use client";
import Form from "./Form";
import Title from "../global/Title";
import Background from "../global/Background";
import Container from "../global/Container";

const Career = () => {
  return (
    <section className="" id="career">
      <div className="only-mob:w-[100%] only-mob:h-[100%]  py-[56px] relative">
        <Background name={"career"} />

        <Container>
          <div className="only-mob:block">
            <Title
              first={"Choose"}
              second={"Us"}
              className={"mb-[36px] desktop:text-[98px] desktop:mb-[72px]"}
            />
            <p className="text-ft-tw font-extralight w-[179px] mb-[36px] ml-[auto]">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
            <p className="text-th-n font-extralight uppercase mb-[36px] ml-[auto] mr-[39px] text-right">
              Why us ?
            </p>
            <ul>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">
                  Professional development
                </h3>
                <p className="text-tw-tw font-extralight text-right">
                  We offer growth opportunities and a creative environment to
                  nurture your talents.
                </p>
              </li>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">Teamwork</h3>
                <p className="text-tw-tw font-extralight text-right">
                  Join our close-knit family, where support and inspiration
                  abound.
                </p>
              </li>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">
                  Stimulating work environment
                </h3>
                <p className="text-tw-tw font-extralight text-right">
                  Flexibility and remote options for a comfortable experience.
                </p>
              </li>
              <li className="w-[181px] mb-[16px]">
                <h3 className="text-ft-tw text-right mb-[8px]">
                  Exciting challenges
                </h3>
                <p className="text-tw-tw font-extralight text-right">
                  Unleash your potential through unforgettable projects
                  showcasing Carpathian beauty.
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="only-mob:w-[100%] only-mob:h-[100%] py-[56px] relative">
        <Background name={"career"} />
        <container className="w-[320px] px-[20px] mx-auto block">
          <p className="text-ft-tw font-extralight w-[179px] ml-[auto] mb-[24px]">
            <span>Don't miss your opportunity!</span>
            <br />
            <span>Fill out the form right now and join our team!</span>
          </p>

          <Form />
        </container>
      </div>
    </section>
  );
};

export default Career;
