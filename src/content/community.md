---
layout: page.njk
title: Community
permalink: /community/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1>{{ community.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ community.hero.subtitle }}</p>
    </div>
</section>

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
