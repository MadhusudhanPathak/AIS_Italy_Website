---
layout: page.njk
title: FAQ
permalink: /faq/
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0 opacity-70" style="background-size: cover; background-position: center;"></div>
    <div class="container text-center relative z-10">
        <h1>{{ faq.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ faq.hero.subtitle }}</p>
    </div>
</section>

<!-- FAQ Content -->
<section class="section">
    <div class="container max-w-3xl mx-auto">
        {% for category in faq.categories %}
        <div class="mb-16">
            <h2 class="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6 pb-2 border-b border-gray-200 dark:border-primary-700">{{ category.name }}</h2>
            
            <div class="space-y-4">
                {% for question in category.questions %}
                <details class="group">
                    <summary class="cursor-pointer py-4 px-6 bg-primary-100 dark:bg-primary-700 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-600 transition-colors">
                        <h3 class="font-semibold flex items-center justify-between">
                            {{ question.question }}
                            <span class="ml-2 group-open:rotate-180 transition-transform">▼</span>
                        </h3>
                    </summary>
                    <div class="p-6 pt-0 text-primary-700 dark:text-primary-200">
                        <p>{{ question.answer }}</p>
                    </div>
                </details>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</section>

<!-- Additional Resources -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-primary-800 dark:to-primary-900">
    <div class="container max-w-4xl mx-auto">
        <div class="text-center mb-12">
            <h2 class="text-primary-900 dark:text-primary-100">{{ faq.resources.title }}</h2>
            <p class="text-xl text-primary-600 dark:text-primary-300 mt-4">{{ faq.resources.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {% for resource in faq.resources.items %}
            <div class="card">
                <div class="card-body">
                    <h3 class="font-bold text-primary-900 dark:text-primary-100 mb-3">{{ resource.title }}</h3>
                    <p class="text-sm text-primary-600 dark:text-primary-300 mb-4">{{ resource.description }}</p>
                    <a href="{{ resource.link_url }}" class="text-emerald-600 font-semibold text-sm hover:underline">{{ resource.link_text }} →</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>

</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box text-center">
            <h2 class="text-white">{{ faq.cta.title }}</h2>
            <p class="text-white">{{ faq.cta.description }}</p>
            <a href="{{ faq.cta.button_link }}" class="btn bg-white dark:bg-primary-700 text-accent hover:bg-gray-100 dark:hover:bg-primary-600 mt-6">{{ faq.cta.button_text }}</a>
        </div>
    </div>
</section>
