<template>
 <section class="home-section">
        <div class="marquee-wrapper" style="user-select: none;">
  <div class="marquee-content scrollingX">
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I1" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I2" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I3" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I4" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I5" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I6" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I7" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I8" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I9" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I10" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I11" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I12" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
          <source media="(min-width: 768px)">
          <img :src="I13" alt="">
        </picture>
      </article>
    </div>
    <div class="card-testimonial">
      <article>
        <picture>
            <source media="(min-width: 768px)">
            <img :src="I14" alt="">
        </picture>
      </article>
    </div>
  </div>
</div>
    </section>
</template>
<script>
    import I1 from '@/assets/1.jpg'
    import I2 from '@/assets/2.jpg'
    import I3 from '@/assets/3.jpg'
    import I4 from '@/assets/4.jpg'
    import I5 from '@/assets/5.jpg'
    import I6 from '@/assets/6.jpg'
    import I7 from '@/assets/7.jpg'
    import I8 from '@/assets/8.jpg'
    import I9 from '@/assets/9.jpg'
    import I10 from '@/assets/10.jpg'
    import I11 from '@/assets/11.jpg'
    import I12 from '@/assets/12.jpg'
    import I13 from '@/assets/13.jpg'
    import I14 from '@/assets/14.jpg'

export default {
        name: 'CarousselComponent',

        data: () => ({
            I1,I2,I3,I4,I5,I6,I7,I8,I9,I10,I11,I12,I13,I14,
        }),

    }
</script>