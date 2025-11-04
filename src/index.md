---
title: Emily DuBois
layout: base.njk
---

Hello, I’m Emily. I’m a business operations specialist in the College of Natural Sciences at The University of Texas at Austin. Previously, I worked as a software developer at [Upstream Tech](https://www.upstream.tech/), [Toitū Te Whenua Land Information New Zealand](https://www.linz.govt.nz/), and [Mapbox](https://www.mapbox.com/).

Follow along as I rediscover programming!

<h2>Recently</h2>
<ul>
  {%- for post in collections.post -%}
    <li><a href="{{ post.url }}">{{ post.data.title }}</a> - {{post.data.date | date: '%B %e, %Y' }} </li>
  {%- endfor -%}
</ul>