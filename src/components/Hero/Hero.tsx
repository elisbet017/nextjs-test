"use client";
import Background from "../global/Background";
import Container from "../global/Container";
import Section from "../global/Section";
import Button from "./Button";
import SevenDaysBlock from "./SevenDaysBlock";
import SubText from "./SubText";
import Text from "./Text";
import Title from "./Title";

const Hero = () => {
  return (
    <Section id="#home" className="pt-[181px] tablet:pt-[124px] pb-14 tablet:pb-[64px] relative flex justify-center desktop:pt-[130px] desktop:pb-[104px]">
      <Background name={"hero"} />
      <Container className=" relative tablet:flex tablet:justify-center tablet:gap-[48px]">
        <div>
          <Title />
          <SubText />
        </div>
        <div className="flex flex-col items-end">
          <SevenDaysBlock />
          <div>
            <Text />
            <Button />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
