---
layout: page.njk
title: Contact
permalink: /contact/
---

<!-- Hero Section -->

<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1>{{ contact.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
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
                    <p class="text-primary-600 dark:text-primary-300 mb-4">
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
                    <p class="text-primary-600 dark:text-primary-300 mb-4">
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
                    <p class="text-primary-600 dark:text-primary-300 mb-4">
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

<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box text-center">
            <h2 class="text-white">{{ community.cta.title }}</h2>
            <p class="text-white">{{ community.cta.description }}</p>
            <a href="{{ site.social.discord }}" class="btn bg-white dark:bg-primary-700 text-accent hover:bg-gray-100 dark:hover:bg-primary-600 mt-6" target="_blank" rel="noopener noreferrer">{{ community.cta.button_text }}</a>
        </div>
    </div>
</section>
