---
layout: page.njk
title: FAQ
permalink: /faq/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title">{{ faq.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto">{{ faq.hero.subtitle }}</p>
    </div>
</section>

<!-- FAQ Content -->
<section class="section">
    <div class="container max-w-3xl mx-auto">
        {% for category in faq.categories %}
        <div class="mb-16">
            <h2 class="text-2xl font-bold mb-6 pb-2" style="border-color: var(--card-border); color: var(--text-primary);">{{ category.name }}</h2>
            
            <div class="space-y-4">
                {% for question in category.questions %}
                <details class="group">
                    <summary class="cursor-pointer py-4 px-6 rounded-lg transition-colors" style="background-color: var(--card-hover); color: var(--text-primary);">
                        <h3 class="font-semibold flex items-center justify-between">
                            {{ question.question }}
                            <span class="ml-2 group-open:rotate-180 transition-transform">▼</span>
                        </h3>
                    </summary>
                    <div class="p-6 pt-0" style="color: var(--text-secondary);">
                        <p>{{ question.answer }}</p>
                    </div>
                </details>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</section>

<!-- CTA Section -->
<section class="section" style="background: var(--gradient-accent);">
    <div class="container">
        <div class="cta-box text-center">
            <h2>{{ faq.cta.title }}</h2>
            <p>{{ faq.cta.description }}</p>
            <a href="{{ faq.cta.button_link }}" class="btn mt-6" style="background-color: var(--card-bg); color: var(--accent); border: 2px solid var(--accent);">{{ faq.cta.button_text }}</a>
        </div>
    </div>
</section>
