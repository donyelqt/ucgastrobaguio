import { Title } from '@/components/common/Title';
import { Card } from '@/components/common/Card';
import { expertise } from '@/assets/data/dummydata';

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className='heading-title'>
            <Title title="WHAT ARE THE SERVICES OFFERED BY THE HOSPITALS IN BAGUIO CITY?" />
            <p>ano ilalagay natin dito</p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item, i) => (
              <div className='box' >
                <Card data={item} key={item.i} caption="Learn more" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise;


