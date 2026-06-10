---
layout: page.njk
title: About Us
permalink: /about/
seoTitle: 'About AI Safety Italia — Mission, Vision & How We Work'
seoDescription: "Learn about AI Safety Italia's mission to reduce AI risks in Italy through learning, education, and community building across 9 active working groups."
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0" style="background-image: url('/assets/img/ais_italy.jpg');"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title" data-en="{{ about.hero.title }}" data-it="{{ about.hero.title_it }}">{{ about.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto" data-en="{{ about.hero.subtitle }}" data-it="{{ about.hero.subtitle_it }}">{{ about.hero.subtitle }}</p>
    </div>
</section>

<!-- Mission and Vision -->
<section class="section">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="feature-box">
                <span class="text-5xl mb-4 block">{{ about.mission_vision.mission.emoji }}</span>
                <h2 class="text-2xl font-bold mb-4" data-en="{{ about.mission_vision.mission.title }}" data-it="{{ about.mission_vision.mission.title_it }}">{{ about.mission_vision.mission.title }}</h2>
                <p data-en="{{ about.mission_vision.mission.description }}" data-it="{{ about.mission_vision.mission.description_it }}">{{ about.mission_vision.mission.description }}</p>
            </div>
            <div class="feature-box">
                <span class="text-5xl mb-4 block">{{ about.mission_vision.vision.emoji }}</span>
                <h2 class="text-2xl font-bold mb-4" data-en="{{ about.mission_vision.vision.title }}" data-it="{{ about.mission_vision.vision.title_it }}">{{ about.mission_vision.vision.title }}</h2>
                <p data-en="{{ about.mission_vision.vision.description }}" data-it="{{ about.mission_vision.vision.description_it }}">{{ about.mission_vision.vision.description }}</p>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Our Approach -->
<section class="section" style="background: linear-gradient(to bottom right, var(--bg-secondary), var(--bg-tertiary));">
    <div class="container">
        <h2 class="text-center mb-12" data-en="{{ about.approach_section_title }}" data-it="{{ about.approach_section_title_it }}">{{ about.approach_section_title }}</h2>
        <div class="feature-list">
            {% for approach in about.approach %}
            <div class="feature-item">
                <span class="feature-icon">{{ approach.icon }}</span>
                <div class="feature-content">
                    <h4 data-en="{{ approach.title }}" data-it="{{ approach.title_it }}">{{ approach.title }}</h4>
                    <p data-en="{{ approach.description }}" data-it="{{ approach.description_it }}">{{ approach.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- CTA Section -->
<section class="section" style="background: var(--gradient-primary);">
    <div class="container">
        <div class="cta-box text-center">
            <h2 data-en="{{ about.cta.title }}" data-it="{{ about.cta.title_it }}">{{ about.cta.title }}</h2>
            <p data-en="{{ about.cta.description }}" data-it="{{ about.cta.description_it }}">{{ about.cta.description }}</p>
            <a href="{{ site.forms.mailingList }}" class="btn mt-6" style="background-color: #ffffff; color: var(--accent-700);"
               target="_blank" rel="noopener noreferrer"
               data-en="{{ about.cta.button_text }}" data-it="{{ about.cta.button_text_it }}">{{ about.cta.button_text }}</a>
        </div>
    </div>
</section>
