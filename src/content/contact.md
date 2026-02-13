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
            <h2>Get in Touch</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4 max-w-2xl mx-auto">
                Reach us through your preferred channel
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% for channel in contact.channels %}
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">{{ channel.emoji }}</span>
                    <h3 class="mb-3">{{ channel.title }}</h3>
                    <p class="text-primary-600 dark:text-primary-300 mb-4">
                        {{ channel.description }}
                    </p>
                    <a href="{{ channel.link }}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        {{ channel.button_text }}
                    </a>
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
