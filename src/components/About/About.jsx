"use client";
import Background from "../global/Background";
import Container from "../global/Container";
import Section from "../global/Section";
import Title from "../global/Title";
import Text from "./Text";
import TextBlock from "./TextBlock";
import content from "./content.json";

const About = () => {
  return (
    <Section id={"about"} className={"desktop:py-[80px]"}>
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
              second={content[0]}
              className={
                "only-mob:w-[180px] mb-[30px] only-tab:w-[220px] tablet:mb-[16px] desktop:w-[292px]"
              }
            />
            <Text
              first={"We believe"}
              second={content[1]}
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
            second={content[2]}
            className={
              "only-tab:w-[463px] only-tab:ml-[auto] desktop:w-[605px]"
            }
          />
        </div>
      </Container>
    </Section>
  );
};

export default About;
