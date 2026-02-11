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
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ contact.hero.subtitle }}</p>
    </div>
</section>

<!-- Contact Methods -->
<section class="section">
    <div class="container max-w-4xl mx-auto">
        <div class="text-center mb-12">
            <h2>Get in Touch</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4">Reach us through your preferred channel</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {% for method in contact.contact_methods %}
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">{{ method.emoji }}</span>
                    <h3 class="mb-3">{{ method.title }}</h3>
                    <p class="text-primary-600 dark:text-primary-300 mb-4">{{ method.description }}</p>
                    <a href="{{ method.cta_link }}" class="btn btn-outline">{{ method.cta_text }}</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Mailing List -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="container max-w-2xl mx-auto">
        <div class="card-accent border-2 border-accent text-center">
            <h2 class="text-accent mb-4 mt-0">{{ contact.mailing_list.title }}</h2>
            <p class="mb-6">{{ contact.mailing_list.description }}</p>
            <a href="{{ contact.mailing_list.form_url }}" target="{{ contact.mailing_list.form_target }}" class="btn btn-primary">{{ contact.mailing_list.button_text }}</a>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Location -->
<section class="section">
    <div class="container max-w-4xl mx-auto">
        <div class="text-center mb-12">
            <h2>{{ contact.location.title }}</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4">{{ contact.location.description }}</p>
        </div>
        
        <div class="card text-center">
            <div class="card-body">
                <span class="text-4xl mb-4 block">📍</span>
                <h3 class="mb-4">Address</h3>
                <p class="text-primary-600 dark:text-primary-300 mb-4">{{ contact.location.address | replace('\n', '<br>') }}</p>
                <p class="text-sm text-primary-600 dark:text-primary-300">{{ contact.location.additional_info }}</p>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Social Media -->
<section class="section bg-gradient-to-br from-emerald-50 to-teal-50">
    <div class="container max-w-4xl mx-auto">
        <div class="text-center mb-12">
            <h2>{{ contact.social_media.title }}</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4">{{ contact.social_media.description }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {% for platform in contact.social_media.platforms %}
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">{{ platform.emoji }}</span>
                    <h3 class="mb-3">{{ platform.name }}</h3>
                    <p class="text-primary-600 dark:text-primary-300 mb-4">{{ platform.description }}</p>
                    <a href="{{ platform.link }}" target="_blank" class="btn btn-primary">{{ platform.username }}</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Office Hours -->
<section class="section">
    <div class="container max-w-2xl mx-auto">
        <div class="text-center mb-12">
            <h2>{{ contact.office_hours.title }}</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4">{{ contact.office_hours.description }}</p>
        </div>
        
        <div class="card text-center">
            <div class="card-body">
                <span class="text-4xl mb-4 block">⏰</span>
                <h3 class="mb-4">Schedule</h3>
                <p class="text-primary-600 dark:text-primary-300 mb-2">{{ contact.office_hours.days }}</p>
                <p class="text-primary-600 dark:text-primary-300 mb-4">{{ contact.office_hours.time }}</p>
                <p class="text-sm text-primary-600 dark:text-primary-300">Format: {{ contact.office_hours.format }}<br>{{ contact.office_hours.additional_info }}</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box text-center">
            <h2>{{ contact.cta.title }}</h2>
            <p>{{ contact.cta.description }}</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                {% for button in contact.cta.buttons %}
                <a href="{{ button.link }}" class="btn bg-white dark:bg-primary-700 text-accent hover:bg-gray-100 dark:hover:bg-primary-600">{{ button.text }}</a>
                {% endfor %}
            </div>
        </div>
    </div>
</section>
