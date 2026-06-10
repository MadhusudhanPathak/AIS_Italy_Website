---
layout: page.njk
title: Home
permalink: /
seoTitle: "AI Safety Italia — Italy's AI Safety Community"
seoDescription: "AI Safety Italia is Italy's grassroots community reducing risks from advanced AI through awareness, education, and collaboration. Open to researchers, students, and professionals."
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0" style="background-image: url('/assets/img/ais_italy.jpg');"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title" data-en="{{ translations.en.hero.title }}" data-it="{{ translations.it.hero.title }}">{{ translations.en.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto" data-en="{{ translations.en.hero.subtitle }}" data-it="{{ translations.it.hero.subtitle }}">{{ translations.en.hero.subtitle }}</p>
        <p class="hero-sub text-lg max-w-2xl mx-auto mt-4" data-en="{{ translations.en.hero.description }}" data-it="{{ translations.it.hero.description }}">{{ translations.en.hero.description }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="{{ home.hero.cta_link }}" class="btn btn-primary" data-en="{{ translations.en.hero.cta }}" data-it="{{ translations.it.hero.cta }}">{{ translations.en.hero.cta }}</a>
            <a href="{{ home.hero.secondary_cta_link }}" class="btn btn-secondary" data-en="{{ translations.en.hero.secondary_cta }}" data-it="{{ translations.it.hero.secondary_cta }}">{{ translations.en.hero.secondary_cta }}</a>
        </div>
    </div>
</section>

<!-- Stats Section -->
<!-- <section class="section bg-gradient-to-r from-accent to-safety-blue text-white">
    <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {% for stat in home.stats %}
            <div class="stat-item">
                <div class="text-4xl font-bold">{{ stat.count }}</div>
                <div class="text-sm opacity-90">{{ stat.label }}</div>
            </div>
            {% endfor %}
        </div>
    </div>
</section> -->

{% include "news-carousel.njk" %}

<!-- Recent Events
<section class="section" id="learn-more">
    <div class="container">
        <div class="text-center mb-12">
            <span class="badge badge-info mb-4">🎯 Events</span>
            <h2>Recent Community Highlights</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4 max-w-2xl mx-auto">Join us for engaging discussions, workshops, and networking opportunities</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {% for event in home.recent_events %}
            {% from "event-card.njk" import event_card %}
            {{ event_card(event.title, event.date, event.emoji, event.participants, event.description, event.link) }}
            {% endfor %}
        </div>
    </div>
</section> -->

<!-- Mission Section with Split Layout
<section class="section bg-gradient-to-br from-emerald-900 to-slate-800 text-white relative overflow-hidden">
    <div class="absolute top-20 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-safety-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    <div class="container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="feature-box bg-opacity-10 border-0">
                <div class="flex items-start space-x-4 mb-6">
                    <span class="text-5xl">{{ home.mission.problem_emoji }}</span>
                    <div class="flex-1">
                        <h2 class="text-white mb-6 mt-0">{{ home.mission.problem_title }}</h2>
                        <p class="text-blue-100 mb-4">{{ home.mission.problem_description | split('\n\n') | first }}</p>
                        <p class="text-blue-100">{{ home.mission.problem_description | split('\n\n') | last }}</p>
                        <a href="{{ home.mission.problem_cta_link }}" class="inline-block text-emerald-400 font-semibold hover:text-emerald-300 transition-colors mt-6">{{ home.mission.problem_cta_text }} →</a>
                    </div>
                </div>
            </div>
            <div class="feature-box bg-opacity-10 border-0">
                <div class="flex items-start space-x-4 mb-6">
                    <span class="text-5xl">{{ home.mission.solution_emoji }}</span>
                    <div class="flex-1">
                        <h2 class="text-white mb-6 mt-0">{{ home.mission.solution_title }}</h2>
                        <p class="text-blue-100 mb-4">{{ home.mission.solution_description | split('\n\n') | first }}</p>
                        <p class="text-blue-100">{{ home.mission.solution_description | split('\n\n') | last }}</p>
                        <a href="{{ home.mission.solution_cta_link }}" class="btn btn-primary inline-block mt-6">{{ home.mission.solution_cta_text }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> -->

<!-- Features Section -->
<!-- <section class="section bg-white dark:bg-primary-900">
    <div class="container">
        <div class="text-center mb-16">
            <h2>What We Do</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4 max-w-2xl mx-auto">Our core activities and impact areas</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% for feature in home.features %}
            <div class="card hover-lift">
                <div class="card-body text-center">
                    <span class="text-4xl mb-4 block">{{ feature.emoji }}</span>
                    <h3 class="mb-3">{{ feature.title }}</h3>
                    <p class="text-primary-600 dark:text-primary-300">{{ feature.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section> -->

<!-- CTA Section -->
<section class="section" style="background: var(--gradient-primary);">
    <div class="container">
        <div class="cta-box text-center">
            <h2 data-en="{{ translations.en.cta.title }}" data-it="{{ translations.it.cta.title }}">{{ translations.en.cta.title }}</h2>
            <p data-en="{{ translations.en.cta.description }}" data-it="{{ translations.it.cta.description }}">{{ translations.en.cta.description }}</p>
            <a href="{{ site.forms.mailingList }}" target="_blank" class="btn mt-6" style="background-color: #ffffff; color: var(--accent-700);" data-en="{{ translations.en.cta.button }}" data-it="{{ translations.it.cta.button }}">{{ translations.en.cta.button }}</a>
        </div>
    </div>
</section>
