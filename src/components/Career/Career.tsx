"use client";
import Form from "./Form/Form";
import Title from "../global/Title";
import Container from "../global/Container";
import Features from "./Features";
import TextBlock from "./TextBlock";
import VisualSection from "./VisualSection";
import { FC } from "react";

const Career: FC = () => {
  return (
    <section id="career">
      <VisualSection>
        <Container>
          <div className="only-mob:block">
            <Title
              first={"Choose"}
              second={"Us"}
              className={"mb-[36px] desktop:text-[98px] desktop:mb-[72px]"}
            />
            <TextBlock className={"mb-[36px]"}>
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </TextBlock>
            <p className="text-th-n font-extralight uppercase mb-[36px] ml-[auto] mr-[39px] text-right">
              Why us ?
            </p>
            <Features />
          </div>
        </Container>
      </VisualSection>
      <VisualSection>
        <div className="w-[320px] px-[20px] mx-auto block">
          <TextBlock className={"mb-[24px]"}>
            <span>Don't miss your opportunity!</span>
            <br />
            <span>Fill out the form right now and join our team!</span>
          </TextBlock>
          <Form />
        </div>
      </VisualSection>
    </section>
  );
};

export default Career;
