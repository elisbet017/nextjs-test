"use client";
import Background from "../global/Background";
import Container from "../global/Container";
import Title from "../global/Title";
import Text from "./Text";
import TextBlock from "./TextBlock";

const About = () => {
  return (
    <section
      id="about"
      className="py-[54px] relative tablet:py-[64px] desktop:py-[80px]"
    >
      <Background name={"about"} />
      <Container>
        <div className="tablet:flex only-tab:justify-between only-tab:mb-[64px] desktop:mb-[72px]">
          <Title
            first="Who"
            second="We are"
            className="mb-[8px] tablet:font-thin tablet:mb-0  desktop:w-[606px] desktop:mr-[24px]"
          />
          <div>
            <Text
              first={"a team of enthusiasts"}
              second={
                "who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere."
              }
              className={
                "only-mob:w-[180px] mb-[30px] only-tab:w-[220px] tablet:mb-[16px] desktop:w-[292px]"
              }
            />
            <Text
              first={"We believe"}
              second={
                "that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories."
              }
              className={
                "only-mob:w-[180px] only-mob:mb-[40px] only-tab:w-[220px] desktop:w-[292px]"
              }
            />
          </div>
        </div>
        <div className="relative">
          <div className="only-mob:mb-[40px] only-mob:w-[180px] ml-[auto] tablet:absolute only-tab:top-[-124px] only-tab:w-[221px] desktop:right-0 desktop:w-[298px]">
            <TextBlock text={"From vacationers"} />
            <TextBlock text={"To active travelers"} className={"text-right"} />
            <p className="text-ft-tw font-extralight tracking-tight only-tab:text-[16px] only-tab:leading-[20px] only-tab:tracking-[0.32px] desktop:text-[18px] desktop:leading-[24px] desktop:tracking-m">
              we have a tour for everyone.
            </p>
          </div>
          <Text
            first={"We use methods"}
            second={
              "that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains."
            }
            className={
              "only-tab:w-[463px] only-tab:ml-[auto] desktop:w-[605px]"
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default About;
