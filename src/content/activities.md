---
layout: page.njk
title: Activities
permalink: /activities/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1>{{ activities.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ activities.hero.subtitle }}</p>
    </div>
</section>

<!-- Main Activities -->
<section class="section">
    <div class="container">
        <div class="text-center mb-16">
            <h2>What We Do</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4 max-w-2xl mx-auto">Our core activities span education, research, community building, and advocacy.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {% for activity in activities.activities %}
            <div class="card hover-lift">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">{{ activity.emoji }}</span>
                    <h3 class="mb-3">{{ activity.title }}</h3>
                    <p class="mb-4">{{ activity.description }}</p>
                    <ul class="text-sm text-primary-600 dark:text-primary-300 space-y-1 mb-4">
                        {% for detail in activity.details %}
                        <li>• {{ detail }}</li>
                        {% endfor %}
                    </ul>
                    <a href="{{ activity.cta_link }}" class="text-emerald-600 font-semibold hover:underline">{{ activity.cta_text }} →</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Educational Tracks -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-primary-800 dark:to-primary-900">
    <div class="container">
        <div class="text-center mb-12">
            <h2 class="text-primary-900 dark:text-primary-100">{{ activities.educational_tracks.title }}</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4 max-w-2xl mx-auto">{{ activities.educational_tracks.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {% for track in activities.educational_tracks.tracks %}
            <div class="card border-2 border-emerald-500 dark:border-emerald-700">
                <div class="card-body">
                    <h3 class="text-emerald-600 dark:text-emerald-400 font-bold mb-3">{{ track.title }}</h3>
                    <p class="text-primary-700 dark:text-primary-300 mb-4">{{ track.description }}</p>
                    <ul class="text-sm text-primary-600 dark:text-primary-300 space-y-1 mb-4">
                        <li>• Duration: {{ track.duration }}</li>
                        <li>• Commitment: {{ track.commitment }}</li>
                    </ul>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

</section>

<div class="divider"></div>

<!-- Impact Metrics -->
<section class="section bg-gradient-to-r from-accent to-safety-blue text-white">
    <div class="container">
        <div class="text-center mb-12">
            <h2 class="text-white">{{ activities.impact_metrics.title }}</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {% for metric in activities.impact_metrics.metrics %}
            <div class="stat-item">
                <div class="text-4xl font-bold text-white">{{ metric.count }}</div>
                <div class="text-sm text-white opacity-90">{{ metric.label }}</div>
            </div>
            {% endfor %}
        </div>
    </div>

</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-emerald-500 to-teal-600">
    <div class="container">
        <div class="cta-box text-center">
            <h2 class="text-white">{{ activities.cta.title }}</h2>
            <p class="text-white">{{ activities.cta.description }}</p>
            <a href="{{ activities.cta.button_link }}" class="btn bg-white dark:bg-primary-700 text-emerald-600 dark:text-emerald-400 hover:bg-gray-100 dark:hover:bg-primary-600 mt-6">{{ activities.cta.button_text }}</a>
        </div>
    </div>
</section>
