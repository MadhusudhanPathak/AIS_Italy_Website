---
layout: page.njk
title: Community
permalink: /community/
---

<!-- Hero Section -->

<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title">{{ community.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto">{{ community.hero.subtitle }}</p>
    </div>
</section>

<!-- Team Section -->

<section class="section">
    <div class="container">
        <div class="text-center mb-16">
            <h2>{{ community.team_section.title }}</h2>
            <p class="text-xl mt-4 max-w-2xl mx-auto" style="color: var(--text-secondary);">{{ community.team_section.subtitle }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% for member in team %}
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <div class="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4" style="background: var(--gradient-primary);">
                        {{ member.name | first }}
                    </div>
                    <h3 class="mb-2">{{ member.name }}</h3>
                    <p class="text-sm font-semibold mb-3 uppercase tracking-wide" style="color: var(--accent);">{{ member.role }}</p>
                    <p class="text-sm" style="color: var(--text-secondary);">{{ member.bio }}</p>
                </div>
                <div class="card-footer">
                    <a href="{{ member.email }}" class="text-sm hover:text-opacity-75 font-semibold" style="color: var(--accent);">{{ member.email }}</a>
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
