---
layout: page.njk
title: Home
permalink: /
---

{% include "hero.njk" %}

<!-- Stats Section -->

{% include "stats.njk" %}

<!-- Current Announcements -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32"></div>
    <div class="container relative z-10">
        <div class="text-center mb-12">
            <span class="badge badge-primary mb-4">📢 News</span>
            <h2>Latest Announcements</h2>
        </div>
        <div class="max-w-2xl mx-auto">
            <div class="card-accent">
                <div class="flex items-start space-x-4">
                    <span class="text-4xl flex-shrink-0">📚</span>
                    <div class="flex-1">
                        <h3 class="text-accent mb-2">Introductory Courses Coming Soon</h3>
                        <p class="text-gray-700 mb-3">Registration for our <strong>8-week introductory courses</strong> will be opening in March 2026. We'll be offering tracks in AI Governance and AI Safety Alignment.</p>
                        <p class="text-sm text-gray-600">Stay updated by <a href="{{ site.forms.mailingList }}" target="_blank" class="text-accent font-semibold hover:underline">signing up for our mailing list</a>!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Recent Events -->
<section class="section bg-white" id="learn-more">
    <div class="container">
        <div class="text-center mb-12">
            <span class="badge badge-info mb-4">🎯 Events</span>
            <h2>Recent Community Highlights</h2>
            <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Join us for engaging discussions, workshops, and networking opportunities</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {% from "event-card.njk" import event_card %}
            {{ event_card('AI Safety Roundtable', 'January 20, 2026', '🗣️', '40+ participants', 'Industry experts discussed current challenges in AI alignment research and governance. Key topics included transformer interpretability and societal impacts.', '/events/') }}
            {{ event_card('AI Safety Workshop', 'January 15, 2026', '🎓', '50+ participants', 'Interactive workshop covering fundamentals of AI safety, technical approaches, and policy considerations with hands-on activities.', '/events/') }}
        </div>
    </div>
</section>

<!-- Mission Section with Split Layout -->
<section class="section bg-gradient-to-br from-emerald-900 to-slate-800 text-white relative overflow-hidden">
    <div class="absolute top-20 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-safety-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    <div class="container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <!-- The Problem -->
            <div class="feature-box bg-opacity-10 border-0">
                <div class="flex items-start space-x-4 mb-6">
                    <span class="text-5xl">⚠️</span>
                    <div class="flex-1">
                        <h2 class="text-white mb-6 mt-0">The Challenge</h2>
                        <p class="text-blue-100 mb-4">AI will soon radically transform our society, for better or worse. Experts broadly expect significant progress during our lifetimes, potentially achieving human-level intelligence.</p>
                        <p class="text-blue-100">Digital systems with such capabilities would revolutionize every aspect of our society, making their safe development one of the most pressing challenges of our time.</p>
                        <a href="/community/" class="inline-block text-emerald-400 font-semibold hover:text-emerald-300 transition-colors mt-6">Explore the Issues →</a>
                    </div>
                </div>
            </div>
            
            <!-- Our Solution -->
            <div class="feature-box bg-opacity-10 border-0">
                <div class="flex items-start space-x-4 mb-6">
                    <span class="text-5xl">💡</span>
                    <div class="flex-1">
                        <h2 class="text-white mb-6 mt-0">Our Solution</h2>
                        <p class="text-blue-100 mb-4">We work to ensure AI is developed to benefit humanity's future. Through education, community building, and raising awareness, we create a network of people committed to safer AI development.</p>
                        <p class="text-blue-100">We organize courses, host events, and connect members with resources and opportunities in the rapidly growing AI safety field.</p>
                        <a href="{{ site.forms.mailingList }}" target="_blank" class="btn btn-primary inline-block mt-6">Get Involved Today</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

{% include "features.njk" %}

{% include "cta.njk" %}
