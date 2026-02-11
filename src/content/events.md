---
layout: page.njk
title: Events & News
permalink: /events/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1>{{ events.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ events.hero.subtitle }}</p>
    </div>
</section>

<!-- Events Timeline -->
<section class="section">
    <div class="container">
        <div class="text-center mb-12">
            <span class="badge badge-primary mb-4">📅 Calendar</span>
            <h2>Upcoming & Recent Events</h2>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
            {% for event in events.upcoming_events %}
            <div class="card hover-lift">
                <div class="card-body">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex-1">
                            <span class="badge badge-info">{{ event.status }}</span>
                            <h3 class="mt-3 mb-2">{{ event.title }}</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 text-primary-600 dark:text-primary-300 mb-4 font-semibold">
                        <span>{{ event.emoji }}</span>
                        <span>{{ event.date }}</span>
                    </div>
                    <p class="mb-4">{{ event.description }}</p>
                    <div class="bg-emerald-100 p-4 rounded-lg border border-emerald-200 mb-4">
                        {% for info in event.format_info %}
                        <p class="text-sm text-primary-700 dark:text-primary-200"><span class="font-semibold">{{ info.label }}:</span> {{ info.value }}</p>
                        {% endfor %}
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ event.register_link }}" target="{{ event.register_target }}" class="text-emerald-600 font-semibold hover:underline">{{ event.register_text }} →</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

</section>

<div class="divider"></div>

<!-- Past Events -->
<section class="section bg-gradient-to-br from-gray-50 to-gray-100 dark:from-primary-800 dark:to-primary-900">
    <div class="container">
        <h2 class="text-center text-primary-900 dark:text-primary-100 mb-12">✨ Recent Highlights</h2>
        <div class="max-w-3xl mx-auto space-y-6">
            {% for highlight in events.recent_highlights %}
            <div class="card">
                <div class="card-body">
                    <div class="flex items-start gap-4 mb-4">
                        <span class="text-2xl">{{ highlight.emoji }}</span>
                        <div class="flex-1">
                            <h3 class="text-primary-900 dark:text-primary-100 mb-2">{{ highlight.title }}</h3>
                            <p class="text-sm text-primary-600 dark:text-primary-300">📅 {{ highlight.date }}</p>
                        </div>
                    </div>
                    <p class="text-primary-700 dark:text-primary-300 mb-4">{{ highlight.description }}</p>
                </div>
                <div class="card-footer">
                    <div class="inline-block bg-emerald-100 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
                        👥 {{ highlight.participants }}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

</section>

<!-- Newsletter CTA -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box">
            <h2 class="text-white">{{ events.newsletter_cta.title }}</h2>
            <p class="text-white">{{ events.newsletter_cta.description }}</p>
            <a href="{{ events.newsletter_cta.button_link }}" target="{{ events.newsletter_cta.button_target }}" class="btn bg-white dark:bg-primary-700 text-accent hover:bg-gray-100 dark:hover:bg-primary-600 mt-6">{{ events.newsletter_cta.button_text }}</a>
        </div>
    </div>
</section>
