---
layout: page.njk
title: Contact
permalink: /contact/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0" style="background-image: url('/assets/img/ais_italy.jpg');"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title" data-en="{{ contact.hero.title }}" data-it="{{ contact.hero.title_it }}">{{ contact.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto" data-en="{{ contact.hero.subtitle }}" data-it="{{ contact.hero.subtitle_it }}">{{ contact.hero.subtitle }}</p>
    </div>
</section>

<!-- Main Contact Channels -->
<section class="section">
    <div class="container">
        <div class="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            <!-- Email -->
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="mb-4 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="color: var(--accent);"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </span>
                    <h3 class="mb-3">Email</h3>
                    <p class="mb-4" style="color: var(--text-secondary);"
                       data-en="{{ contact.channels[0].description }}" data-it="{{ contact.channels[0].description_it }}">{{ contact.channels[0].description }}</p>
                    <a href="mailto:{{ site.site.email }}" class="btn btn-outline">
                        {{ site.site.email }}
                    </a>
                </div>
            </div>

            <!-- LinkedIn -->
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="mb-4 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="color: var(--accent);"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </span>
                    <h3 class="mb-3">LinkedIn</h3>
                    <p class="mb-4" style="color: var(--text-secondary);"
                       data-en="{{ contact.channels[1].description }}" data-it="{{ contact.channels[1].description_it }}">{{ contact.channels[1].description }}</p>
                    <a href="{{ site.social.linkedin }}" class="btn btn-outline" target="_blank" rel="noopener noreferrer"
                       data-en="{{ contact.channels[1].link_text }}" data-it="{{ contact.channels[1].link_text_it }}">{{ contact.channels[1].link_text }}</a>
                </div>
            </div>

            <!-- Discord -->
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="mb-4 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="color: var(--accent);"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.1.12 18.14.149 18.17a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                    </span>
                    <h3 class="mb-3">Discord</h3>
                    <p class="mb-4" style="color: var(--text-secondary);"
                       data-en="{{ contact.channels[2].description }}" data-it="{{ contact.channels[2].description_it }}">{{ contact.channels[2].description }}</p>
                    <a href="{{ site.social.discord }}" class="btn btn-outline" target="_blank" rel="noopener noreferrer"
                       data-en="{{ contact.channels[2].link_text }}" data-it="{{ contact.channels[2].link_text_it }}">{{ contact.channels[2].link_text }}</a>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- CTA Section -->
<section class="section" style="background: var(--gradient-primary);">
    <div class="container">
        <div class="cta-box text-center">
            <h2 data-en="{{ contact.cta.title }}" data-it="{{ contact.cta.title_it }}">{{ contact.cta.title }}</h2>
            <p data-en="{{ contact.cta.description }}" data-it="{{ contact.cta.description_it }}">{{ contact.cta.description }}</p>
            <a href="{{ site.forms.mailingList }}" class="btn mt-6" style="background-color: #ffffff; color: var(--accent-700);"
               target="_blank" rel="noopener noreferrer"
               data-en="{{ contact.cta.button_text }}" data-it="{{ contact.cta.button_text_it }}">{{ contact.cta.button_text }}</a>
        </div>
    </div>
</section>
