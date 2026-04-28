import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import React from 'react'

const Trending = () => {
  return (
    <section className='py-10'>
        <Container>
            <div>
                <SectionHeading eyebrow="Top rated" title="Trending now" />
            </div>
        </Container>
      
    </section>
  )
}

export default Trending
