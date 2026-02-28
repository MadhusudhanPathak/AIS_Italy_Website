---
layout: page.njk
title: Contact
permalink: /contact/
---

<!-- Hero Section -->

<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title">{{ contact.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto">
            {{ contact.hero.subtitle }}
        </p>
    </div>
</section>

<!-- Main Contact Channels -->

<section class="section">
    <div class="container">
        <div class="text-center mb-16">
        </div>
        <div class="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            <!-- Email -->
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">📧</span>
                    <h3 class="mb-3">Email</h3>
                    <p class="mb-4" style="color: var(--text-secondary);">
                        For any questions:
                    </p>
                    <a href="mailto:{{ site.site.email }}" class="btn btn-outline">
                        {{ site.site.email }}
                    </a>
                </div>
            </div>

            <!-- LinkedIn -->
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">💼</span>
                    <h3 class="mb-3">LinkedIn</h3>
                    <p class="mb-4" style="color: var(--text-secondary);">
                        Follow us for updates and networking opportunities.
                    </p>
                    <a href="{{ site.social.linkedin }}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        Visit LinkedIn
                    </a>
                </div>
            </div>

            <!-- Discord -->
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">💬</span>
                    <h3 class="mb-3">Discord</h3>
                    <p class="mb-4" style="color: var(--text-secondary);">
                        Chat with the community, join events and contribute to AI Safety Italia.
                    </p>
                    <a href="{{ site.social.discord }}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        Join Discord
                    </a>
                </div>
            </div>
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
