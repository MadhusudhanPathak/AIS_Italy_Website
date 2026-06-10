---
layout: page.njk
title: FAQ
permalink: /faq/
seoTitle: 'FAQ — AI Safety Italia | What is AI Safety?'
seoDescription: "Answers to common questions about AI safety, AI Safety Italia's mission, how to join, and what working groups are available."
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0" style="background-image: url('/assets/img/ais_italy.jpg');"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title" data-en="{{ faq.hero.title }}" data-it="{{ faq.hero.title_it }}">{{ faq.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto" data-en="{{ faq.hero.subtitle }}" data-it="{{ faq.hero.subtitle_it }}">{{ faq.hero.subtitle }}</p>
    </div>
</section>

<!-- FAQ Content -->
<section class="section">
    <div class="container max-w-3xl mx-auto">
        {% for category in faq.categories %}
        <div class="mb-16">
            <h2 class="text-2xl font-bold mb-6 pb-2" style="border-color: var(--card-border); color: var(--text-primary);"
                data-en="{{ category.name }}" data-it="{{ category.name_it }}">{{ category.name }}</h2>

            <div class="space-y-4">
                {% for question in category.questions %}
                <details class="group">
                    <summary class="cursor-pointer py-4 px-6 rounded-lg transition-colors" style="background-color: var(--card-hover); color: var(--text-primary);">
                        <h3 class="font-semibold flex items-center justify-between">
                            <span data-en="{{ question.question }}" data-it="{{ question.question_it }}">{{ question.question }}</span>
                            <span class="ml-2 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
                        </h3>
                    </summary>
                    <div class="p-6 pt-2" style="color: var(--text-secondary);">
                        <p data-en="{{ question.answer }}" data-it="{{ question.answer_it }}">{{ question.answer }}</p>
                    </div>
                </details>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>

</section>

<!-- CTA Section -->
<section class="section" style="background: var(--gradient-primary);">
    <div class="container">
        <div class="cta-box text-center">
            <h2 data-en="{{ faq.cta.title }}" data-it="{{ faq.cta.title_it }}">{{ faq.cta.title }}</h2>
            <p data-en="{{ faq.cta.description }}" data-it="{{ faq.cta.description_it }}">{{ faq.cta.description }}</p>
            <a href="{{ site.forms.mailingList }}" target="_blank" class="btn mt-6" style="background-color: #ffffff; color: var(--accent-700);"
               data-en="{{ faq.cta.button_text }}" data-it="{{ faq.cta.button_text_it }}">{{ faq.cta.button_text }}</a>
        </div>
    </div>
</section>
