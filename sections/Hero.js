import { Logo, TitleSm, Title } from '@/components/common/Title';
import Expertise from '@/components/Expertise';  

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Logo />
          <h1 className='hero-title'><span className="green1">UC GastroBaguio</span> is an online platform for hospitals based in Baguio City, Philippines, mainly focused on gastroenteritis.</h1>
        </div>
      </section>
      <div className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="THE FIRST ONLINE PLATFORM OF UC FOR THE HOSPITALS BASED IN BAGUIO CITY, PHILIPPINES." />
            <p>ano ilalagay natin dito</p>
          </div>          
        </div>
      </div>
      <Expertise />
    </>
  );
}

export default Hero;

