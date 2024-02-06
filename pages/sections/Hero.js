import { Logo } from '@/components/common/Title';

const Hero = () => {
  return (
    <div>
        <section className="hero">
            <div className="container">
                <Logo />
                <h1 className='hero-title'><span className="richblack">UC GastroBaguio</span> is a platform of hospitals based in <span className="richblack">Baguio City, Philippines,</span> mainly focused on gastroenteritis.</h1>
            </div>
        </section>
    </div>
  )
}

export default Hero