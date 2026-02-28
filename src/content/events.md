---
layout: page.njk
title: Events & News
permalink: /events/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title">{{ events.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto">{{ events.hero.subtitle }}</p>
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
                    <div class="flex items-center gap-2 mb-4 font-semibold" style="color: var(--text-secondary);">
                        <span>{{ event.emoji }}</span>
                        <span>{{ event.date }}</span>
                    </div>
                    <p class="mb-4">{{ event.description }}</p>
                    <div class="p-4 rounded-lg border mb-4" style="background-color: var(--bg-tertiary); border-color: var(--card-border);">
                        {% for info in event.format_info %}
                        <p class="text-sm" style="color: var(--text-secondary);"><span class="font-semibold">{{ info.label }}:</span> {{ info.value }}</p>
                        {% endfor %}
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ event.register_link }}" target="{{ event.register_target }}" class="font-semibold" style="color: var(--accent);">{{ event.register_text }} →</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

</section>

<div class="divider"></div>

<!-- Past Events -->
<section class="section" style="background: linear-gradient(to bottom right, var(--bg-secondary), var(--bg-tertiary));">
    <div class="container">
        <h2 class="text-center mb-12">✨ Recent Highlights</h2>
        <div class="max-w-3xl mx-auto space-y-6">
            {% for highlight in events.recent_highlights %}
            <div class="card">
                <div class="card-body">
                    <div class="flex items-start gap-4 mb-4">
                        <span class="text-2xl">{{ highlight.emoji }}</span>
                        <div class="flex-1">
                            <h3 class="mb-2">{{ highlight.title }}</h3>
                            <p class="text-sm" style="color: var(--text-secondary);">📅 {{ highlight.date }}</p>
                        </div>
                    </div>
                    <p class="mb-4" style="color: var(--text-secondary);">{{ highlight.description }}</p>
                </div>
                <div class="card-footer">
                    <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background-color: var(--accent-100); color: var(--accent-700);">
                        👥 {{ highlight.participants }}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

</section>

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
