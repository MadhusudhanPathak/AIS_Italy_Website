---
layout: page.njk
title: Community
permalink: /community/
---

<!-- Hero Section -->
<section class="hero">
    <div class="container text-center relative z-10">
        <h1>{{ community.hero.title }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">{{ community.hero.subtitle }}</p>
    </div>
</section>

<!-- Community Benefits -->
<section class="section">
    <div class="container">
        <div class="text-center mb-16">
            <h2>Why Join Our Community?</h2>
            <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Connect, learn, and collaborate with like-minded individuals advancing AI safety.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {% for benefit in community.benefits %}
            <div class="card hover-lift text-center">
                <div class="card-body">
                    <span class="text-4xl mb-4 block">{{ benefit.emoji }}</span>
                    <h3 class="mb-3">{{ benefit.title }}</h3>
                    <p>{{ benefit.description }}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Membership Options -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="container">
        <div class="text-center mb-16">
            <h2>{{ community.membership_options.title }}</h2>
            <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Choose the level that best fits your interests and involvement.</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {% for option in community.membership_options.options %}
            <div class="card bg-white border border-gray-200 {% if option.featured %}relative overflow-hidden{% endif %}">
                {% if option.featured %}
                <div class="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">POPULAR</div>
                {% endif %}
                <div class="card-body">
                    <h3 class="text-xl font-bold mb-3">{{ option.title }}</h3>
                    <div class="text-4xl font-bold mb-4">{{ option.price }}{% if option.price != "Free" and option.price != "Custom" %}<span class="text-sm font-normal">/year</span>{% endif %}</div>
                    <ul class="space-y-3 mb-6">
                        {% for feature in option.features %}
                        <li class="flex items-start">
                            <span class="text-emerald-500 mr-2">✓</span>
                            <span>{{ feature }}</span>
                        </li>
                        {% endfor %}
                    </ul>
                </div>
                <div class="card-footer">
                    <a href="{{ option.cta_link }}" class="btn {% if option.featured %}bg-white text-emerald-600 hover:bg-gray-100{% else %}btn-outline{% endif %} w-full">{{ option.cta_text }}</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Community Sections -->
<section class="section">
    <div class="container">
        <div class="text-center mb-16">
            <h2>Community Sections</h2>
            <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Engage with different parts of our community based on your interests.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% for section in community.sections %}
            <div class="card hover-lift">
                <div class="card-body text-center">
                    <span class="text-4xl mb-4 block">{{ section.emoji }}</span>
                    <h3 class="mb-3">{{ section.title }}</h3>
                    <p class="mb-4">{{ section.description }}</p>
                    <a href="{{ section.cta_link }}" class="text-emerald-600 font-semibold hover:underline">{{ section.cta_text }} →</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- Testimonials -->
<section class="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div class="container">
        <div class="text-center mb-16">
            <h2 class="text-white">What Our Members Say</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% for testimonial in community.testimonials %}
            <div class="card-dark">
                <div class="flex items-start space-x-4">
                    <span class="text-3xl">👍</span>
                    <div>
                        <p class="mb-4 italic">{{ testimonial.quote }}</p>
                        <p class="font-semibold">— {{ testimonial.author }}</p>
                        <p class="text-sm opacity-75">{{ testimonial.role }}</p>
                    </div>
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
            <h2 class="text-white">{{ community.cta.title }}</h2>
            <p class="text-white">{{ community.cta.description }}</p>
            <a href="{{ community.cta.button_link }}" class="btn bg-white text-accent hover:bg-gray-100 mt-6">{{ community.cta.button_text }}</a>
        </div>
    </div>
</section>
