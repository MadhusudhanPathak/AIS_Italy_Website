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

<!-- Team Section -->
<section class="section">
    <div class="container">
        <div class="text-center mb-16">
            <h2>{{ about.team_section.title }}</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4 max-w-2xl mx-auto">{{ about.team_section.subtitle }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% for member in team %}
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <div class="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                        {{ member.name | first }}
                    </div>
                    <h3 class="mb-2">{{ member.name }}</h3>
                    <p class="text-sm text-emerald-600 font-semibold mb-3 uppercase tracking-wide">{{ member.role }}</p>
                    <p class="text-sm text-primary-600 dark:text-primary-300 mb-6">{{ member.bio }}</p>
                </div>
                <div class="card-footer">
                    <a href="mailto:{{ member.email }}" class="text-sm text-emerald-600 hover:text-emerald-700 font-semibold">Get in touch</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Values Section -->
<section class="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div class="container">
        <h2 class="text-center text-white mb-12">Our Core Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {% for value in about.values %}
            <div class="card-dark">
                <span class="text-3xl mb-4 block">{{ value.icon }}</span>
                <h3 class="text-white dark:text-primary-100 mb-3">{{ value.title }}</h3>
                <p class="text-white dark:text-primary-200">{{ value.description }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box">
            <h2>{{ about.cta.title }}</h2>
            <p>{{ about.cta.description }}</p>
            <a href="{{ about.cta.button_link }}" target="_blank" class="btn bg-white dark:bg-primary-700 text-accent hover:bg-gray-100 dark:hover:bg-primary-600 mt-6">{{ about.cta.button_text }}</a>
        </div>
    </div>
</section>
