---
layout: page.njk
title: Events & News
permalink: /events/
seoTitle: 'AI Safety Events & News — Italy | AI Safety Italia'
seoDescription: 'Upcoming AI safety events, seminars, and workshops in Italy and online. Stay updated with the latest news from AI Safety Italia.'
---

<!-- Hero Section -->
<section class="hero">
    <div class="hero-background absolute inset-0 z-0" style="background-image: url('/assets/img/ais_italy.jpg');"></div>
    <div class="container text-center relative z-10">
        <h1 class="hero-title" data-en="{{ events.hero.title }}" data-it="{{ events.hero.title_it }}">{{ events.hero.title }}</h1>
        <p class="hero-sub text-xl md:text-2xl max-w-3xl mx-auto" data-en="{{ events.hero.subtitle }}" data-it="{{ events.hero.subtitle_it }}">{{ events.hero.subtitle }}</p>
    </div>
</section>

<!-- Events Timeline -->
<section class="section">
    <div class="container">
        <div class="text-center mb-12">
            <h2 data-en="{{ events.section_upcoming_title }}" data-it="{{ events.section_upcoming_title_it }}">{{ events.section_upcoming_title }}</h2>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
            {% for event in events.upcoming_events %}
            <div class="card hover-lift">
                <div class="card-body">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex-1">
                            <span class="badge badge-info"
                                  data-en="{{ event.status }}" data-it="{{ event.status_it }}">{{ event.status }}</span>
                            <h3 class="mt-3 mb-2"
                                data-en="{{ event.title }}" data-it="{{ event.title_it }}">{{ event.title }}</h3>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 mb-4 font-semibold" style="color: var(--text-secondary);">
                        <span>{{ event.emoji }}</span>
                        <span data-en="{{ event.date }}" data-it="{{ event.date_it }}">{{ event.date }}</span>
                    </div>
                    <p class="mb-4" data-en="{{ event.description }}" data-it="{{ event.description_it }}">{{ event.description }}</p>
                    <div class="p-4 rounded-lg border mb-4" style="background-color: var(--bg-tertiary); border-color: var(--card-border);">
                        {% for info in event.format_info %}
                        <p class="text-sm" style="color: var(--text-secondary);">
                            <span class="font-semibold" data-en="{{ info.label }}:" data-it="{{ info.label_it }}:">{{ info.label }}:</span>
                            <span data-en="{{ info.value }}" data-it="{{ info.value_it }}">{{ info.value }}</span>
                        </p>
                        {% endfor %}
                    </div>
                </div>
                {% if event.register_link %}
                <div class="card-footer">
                    <a href="{{ event.register_link }}" target="{{ event.register_target }}" class="font-semibold" style="color: var(--accent);"
                       data-en="{{ event.register_text }} →" data-it="{{ event.register_text_it }} →">{{ event.register_text }} →</a>
                </div>
                {% endif %}
            </div>
            {% endfor %}
        </div>
    </div>

</section>

{% if events.recent_highlights | length > 0 %}

<div class="divider"></div>

<!-- Past Events -->
<section class="section" style="background: linear-gradient(to bottom right, var(--bg-secondary), var(--bg-tertiary));">
    <div class="container">
        <h2 class="text-center mb-12" data-en="{{ events.section_highlights_title }}" data-it="{{ events.section_highlights_title_it }}">{{ events.section_highlights_title }}</h2>
        <div class="max-w-3xl mx-auto space-y-6">
            {% for highlight in events.recent_highlights %}
            <div class="card">
                <div class="card-body">
                    <div class="flex items-start gap-4 mb-4">
                        <span class="text-2xl">{{ highlight.emoji }}</span>
                        <div class="flex-1">
                            <h3 class="mb-2">{{ highlight.title }}</h3>
                            <p class="text-sm" style="color: var(--text-secondary);">📅 {{ highlight.date }}</p>
                        </div>
                    </div>
                    <p class="mb-4" style="color: var(--text-secondary);">{{ highlight.description }}</p>
                </div>
                <div class="card-footer">
                    <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold" style="background-color: var(--accent-100); color: var(--accent-700);">
                        👥 {{ highlight.participants }}
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>
{% endif %}

<!-- CTA Section -->
<section class="section" style="background: var(--gradient-primary);">
    <div class="container">
        <div class="cta-box text-center">
            <h2 data-en="{{ events.cta.title }}" data-it="{{ events.cta.title_it }}">{{ events.cta.title }}</h2>
            <p data-en="{{ events.cta.description }}" data-it="{{ events.cta.description_it }}">{{ events.cta.description }}</p>
            <a href="{{ site.forms.mailingList }}" class="btn mt-6" style="background-color: #ffffff; color: var(--accent-700);"
               target="_blank" rel="noopener noreferrer"
               data-en="{{ events.cta.button_text }}" data-it="{{ events.cta.button_text_it }}">{{ events.cta.button_text }}</a>
        </div>
    </div>
</section>
