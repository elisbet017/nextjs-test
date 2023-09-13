const About = () => {
  return (
    <section
      id="about"
      className="py-[54px] relative tablet:py-[64px] desktop:py-[80px]"
    >
      <div className="about-bg absolute bg"></div>
      <div className="gradient absolute"></div>
      <div className="about-full-gr absolute"></div>
      <div className="about-gradient-bottom absolute"></div>
      <container className="only-mob:max-w-[480px] px-[20px] mx-auto block only-tab:max-w-[768px] tablet:px-[32px] desktop:max-w-[1280px] desktop:px-[24px]">
        <div className="tablet:flex only-tab:justify-between only-tab:mb-[64px] desktop:mb-[72px]">
          <h2 className="text-ft-fs tracking-tighter mb-[8px] tablet:text-ss-n tablet:font-thin tablet:tracking-tightest tablet:mb-0 desktop:text-[98px] desktop:tracking-[-3.92px] desktop:w-[606px] desktop:mr-[24px]">
            <span className="font-thin">Who </span>
            <span className="font-medium">We are</span>
          </h2>
          <div>
            <p className="text-ft-tw only-mob:w-[180px] mb-[30px] only-tab:w-[220px] only-tab:text-[16px] tablet:mb-[16px] tablet:leading-[20px] desktop:w-[292px] desktop:text-[18px] desktop:leading-[24px]">
              <span>a team of enthusiasts </span>
              <span className="font-extralight">
                who are fully committed to the mission of creating unforgettable
                and extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </span>
            </p>
            <p className="text-ft-tw only-mob:w-[180px] only-mob:mb-[40px] only-tab:w-[220px] only-tab:text-[16px] only-tab:leading-[20px] desktop:w-[292px] desktop:text-[18px] desktop:leading-[24px]">
              <span>We believe </span>
              <span className="font-extralight">
                that nature has the power to inspire, strengthen character and
                provide new perspectives. Therefore, each of our tours is aimed
                at unlocking your potential, enriching your spiritual world and
                creating unforgettable memories.
              </span>
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="only-mob:mb-[40px] only-mob:w-[180px] ml-[auto] tablet:absolute only-tab:top-[-124px] only-tab:w-[221px] desktop:right-0 desktop:w-[298px]">
            <p className="text-ft-tw uppercase only-tab:text-[16px] only-tab:leading-[20px] desktop:text-[18px] desktop:leading-[24px]">
              From vacationers
            </p>
            <p className="text-ft-tw uppercase text-right only-tab:text-[16px] only-tab:leading-[20px] desktop:text-[18px] desktop:leading-[24px]">
              to active travelers
            </p>
            <p className="text-ft-tw font-extralight tracking-tight only-tab:text-[16px] only-tab:leading-[20px] only-tab:tracking-[0.32px] desktop:text-[18px] desktop:leading-[24px] desktop:tracking-m">
              we have a tour for everyone.
            </p>
          </div>
          <p className="text-ft-tw only-tab:w-[463px] only-tab:ml-[auto] only-tab:text-[16px] only-tab:leading-[20px] desktop:text-[18px] desktop:leading-[24px] desktop:w-[605px]">
            <span>We use methods </span>
            <span className="font-extralight">
              that are time-tested and proven. Our expert guides with in-depth
              knowledge of the Carpathian landscapes lead you safely through the
              mysteries of these mountains.
            </span>
          </p>
        </div>
      </container>
    </section>
  );
};

export default About;
