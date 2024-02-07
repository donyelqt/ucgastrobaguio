import { Logo, Title, TitleSm } from '@/components/common/Title';

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
                 <Title title="The first online platform of UC for the hospitals based in Baguio City, Philippines." />
                 <p>ano ilalagay natin dito</p>
            </div>           
            
          </div>
        </div>
    </>
  )
}

export default Hero