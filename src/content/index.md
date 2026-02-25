---
layout: page.njk
title: Home
permalink: /
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1>{{ home.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ home.hero.subtitle }}</p>
        <p class="text-lg text-blue-200 max-w-2xl mx-auto mt-4">{{ home.hero.description }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="{{ home.hero.cta_link }}" class="btn btn-primary">{{ home.hero.cta_text }}</a>
            <a href="{{ home.hero.secondary_cta_link }}" class="btn btn-secondary">{{ home.hero.secondary_cta_text }}</a>
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

<!-- Current Announcements -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-primary-800 dark:to-primary-900 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32"></div>
    <div class="container relative z-10">
        <div class="text-center mb-12">
            <span class="badge badge-primary mb-4">📢 News</span>
            <h2>Latest Announcements</h2>
        </div>
        <div class="max-w-2xl mx-auto">
            {% for announcement in home.announcements %}
            <div class="card-accent">
                <div class="flex items-start space-x-4">
                    <span class="text-4xl flex-shrink-0">{{ announcement.emoji }}</span>
                    <div class="flex-1">
                        <h3 class="text-accent mb-2">{{ announcement.title }}</h3>
                        <p class="text-primary-700 dark:text-primary-300 mb-3">{{ announcement.description | safe }}</p>
                        <p class="text-sm text-primary-600 dark:text-primary-300">Stay updated by <a href="{{ announcement.link_url }}" target="{{ announcement.link_target }}" class="text-accent font-semibold hover:underline">{{ announcement.link_text }}</a>!</p>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

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
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box text-center">
            <h2>{{ home.cta.title }}</h2>
            <p>{{ home.cta.description }}</p>
            <a href="{{ home.cta.button_link }}" class="btn bg-white dark:bg-primary-700 text-accent hover:bg-gray-100 dark:hover:bg-primary-600 mt-6">{{ home.cta.button_text }}</a>
        </div>
    </div>
</section>
