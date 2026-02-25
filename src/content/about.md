---
layout: page.njk
title: About Us
permalink: /about/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1>{{ about.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ about.hero.subtitle }}</p>
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
                <p class="text-sm text-primary-600 dark:text-primary-300 mt-4">{{ about.mission_vision.mission.note }}</p>
            </div>
            <div class="feature-box">
                <span class="text-5xl mb-4 block">{{ about.mission_vision.vision.emoji }}</span>
                <h2 class="text-2xl font-bold mb-4">{{ about.mission_vision.vision.title }}</h2>
                <p>{{ about.mission_vision.vision.description }}</p>
                <p class="text-sm text-primary-600 dark:text-primary-300 mt-4">{{ about.mission_vision.vision.note }}</p>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Our Approach -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-primary-800 dark:to-primary-900">
    <div class="container">
        <h2 class="text-center text-primary-900 dark:text-primary-100 mb-12">How We Work</h2>
        <div class="feature-list">
            {% for approach in about.approach %}
            <div class="feature-item">
                <span class="feature-icon">{{ approach.icon }}</span>
                <div class="feature-content">
                    <h4 class="text-primary-900 dark:text-primary-100">{{ approach.title }}</h4>
                    <p class="text-primary-700 dark:text-primary-300">{{ approach.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box text-center">
            <h2 class="text-white">{{ community.cta.title }}</h2>
            <p class="text-white">{{ community.cta.description }}</p>
            <a href="{{ site.social.discord }}" class="btn bg-white dark:bg-primary-700 text-accent hover:bg-gray-100 dark:hover:bg-primary-600 mt-6" target="_blank" rel="noopener noreferrer">{{ community.cta.button_text }}</a>
        </div>
    </div>
</section>
