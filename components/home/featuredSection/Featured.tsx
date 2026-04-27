import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import React from 'react'

const Featured = () => {
  return (
    <section className='py-10'>
      <Container>
        <div>
             <SectionHeading eyebrow="Curated" title="Featured products" link="/categories" linkLabel="Shop all" />
        </div>
      </Container>
    </section>
  )
}

export default Featured
