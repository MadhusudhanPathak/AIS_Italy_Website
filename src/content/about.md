---
layout: page.njk
title: About Us
permalink: /about/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title">{{ about.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto">{{ about.hero.subtitle }}</p>
    </div>
</section>

<!-- Mission and Vision -->
<section class="section">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="feature-box">
                <span class="text-5xl mb-4 block">{{ about.mission_vision.mission.emoji }}</span>
                <h2 class="text-2xl font-bold mb-4">{{ about.mission_vision.mission.title }}</h2>
                <p>{{ about.mission_vision.mission.description }}</p>
                <p class="text-sm mt-4" style="color: var(--text-secondary);">{{ about.mission_vision.mission.note }}</p>
            </div>
            <div class="feature-box">
                <span class="text-5xl mb-4 block">{{ about.mission_vision.vision.emoji }}</span>
                <h2 class="text-2xl font-bold mb-4">{{ about.mission_vision.vision.title }}</h2>
                <p>{{ about.mission_vision.vision.description }}</p>
                <p class="text-sm mt-4" style="color: var(--text-secondary);">{{ about.mission_vision.vision.note }}</p>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Our Approach -->
<section class="section" style="background: linear-gradient(to bottom right, var(--bg-secondary), var(--bg-tertiary));">
    <div class="container">
        <h2 class="text-center mb-12">How We Work</h2>
        <div class="feature-list">
            {% for approach in about.approach %}
            <div class="feature-item">
                <span class="feature-icon">{{ approach.icon }}</span>
                <div class="feature-content">
                    <h4>{{ approach.title }}</h4>
                    <p>{{ approach.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- CTA Section -->
<section class="section" style="background: var(--gradient-accent);">
    <div class="container">
        <div class="cta-box text-center">
            <h2>{{ community.cta.title }}</h2>
            <p>{{ community.cta.description }}</p>
            <a href="{{ site.social.discord }}" class="btn mt-6" style="background-color: var(--card-bg); color: var(--accent); border: 2px solid var(--accent);" target="_blank" rel="noopener noreferrer">{{ community.cta.button_text }}</a>
        </div>
    </div>
</section>
