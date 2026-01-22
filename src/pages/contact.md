---
layout: page.njk
title: Contact
permalink: /contact/
---

<!-- Hero Section -->
<section class="hero">
    <div class="container text-center relative z-10">
        <h1>Get in Touch</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Have questions? Want to get involved? We'd love to hear from you!</p>
    </div>
</section>

<!-- Contact Grid -->
<section class="section">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Information -->
            <div>
                <h2 class="mb-8">Contact Information</h2>
                <div class="space-y-6">
                    <div class="card hover-lift">
                        <div class="flex items-start gap-4">
                            <span class="text-4xl">📧</span>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold mb-2">Email</h3>
                                <a href="mailto:{{ site.site.email }}" class="text-accent font-semibold hover:underline block mb-2">{{ site.site.email }}</a>
                                <p class="text-sm text-gray-600">General inquiries and contact</p>
                            </div>
                        </div>
                    </div>

                    <div class="card hover-lift">
                        <div class="flex items-start gap-4">
                            <span class="text-4xl">💼</span>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold mb-2">Connect on LinkedIn</h3>
                                <a href="{{ site.social.linkedin }}" target="_blank" class="text-accent font-semibold hover:underline block mb-2">Visit Our LinkedIn</a>
                                <p class="text-sm text-gray-600">Follow updates and connect with our community</p>
                            </div>
                        </div>
                    </div>

                    <div class="card hover-lift">
                        <div class="flex items-start gap-4">
                            <span class="text-4xl">💌</span>
                            <div class="flex-1">
                                <h3 class="text-lg font-bold mb-2">Subscribe</h3>
                                <a href="{{ site.forms.mailingList }}" target="_blank" class="btn btn-primary inline-block">Join Our Newsletter</a>
                                <p class="text-sm text-gray-600 mt-2">Stay updated on courses, events, and news</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Links / I Want To -->
            <div>
                <h2 class="mb-8">What Are You Looking For?</h2>
                <div class="space-y-4">
                    <a href="{{ site.forms.courseApplication }}" target="_blank" class="card hover-lift hover:shadow-xl">
                        <div class="flex items-start gap-4">
                            <span class="text-3xl">📖</span>
                            <div class="flex-1">
                                <h4 class="font-bold mb-1">Apply for a Course</h4>
                                <p class="text-sm text-gray-600">Join our 8-week introductory programs</p>
                            </div>
                        </div>
                    </a>
                    <a href="/activities/" class="card hover-lift hover:shadow-xl">
                        <div class="flex items-start gap-4">
                            <span class="text-3xl">🎯</span>
                            <div class="flex-1">
                                <h4 class="font-bold mb-1">Explore Our Activities</h4>
                                <p class="text-sm text-gray-600">Learn about programs and opportunities</p>
                            </div>
                        </div>
                    </a>
                    <a href="/community/" class="card hover-lift hover:shadow-xl">
                        <div class="flex items-start gap-4">
                            <span class="text-3xl">📚</span>
                            <div class="flex-1">
                                <h4 class="font-bold mb-1">Find Learning Resources</h4>
                                <p class="text-sm text-gray-600">Access AI safety materials</p>
                            </div>
                        </div>
                    </a>
                    <a href="/events/" class="card hover-lift hover:shadow-xl">
                        <div class="flex items-start gap-4">
                            <span class="text-3xl">📅</span>
                            <div class="flex-1">
                                <h4 class="font-bold mb-1">See Upcoming Events</h4>
                                <p class="text-sm text-gray-600">Browse talks and workshops</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

</section>

<div class="divider"></div>

<!-- Contribution Section -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="container max-w-3xl mx-auto">
        <div class="card-accent border-2 border-accent">
            <div class="flex items-start gap-6">
                <span class="text-5xl flex-shrink-0">🤝</span>
                <div class="flex-1">
                    <h2 class="text-accent mb-4 mt-0">Want to Contribute?</h2>
                    <p class="mb-4">We're always looking for passionate people to help with our mission. Whether you're interested in volunteering, speaking at events, contributing content, or collaborating on research, please reach out!</p>
                    <p class="text-sm text-gray-700 mb-6">We welcome contributions from people of all backgrounds and skill levels. Your unique perspective and expertise can help advance AI safety.</p>
                    <a href="mailto:{{ site.site.email }}" class="btn btn-primary">Get Involved</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Link -->
<section class="section">
    <div class="container text-center">
        <p class="text-lg text-gray-700 mb-6">Have questions?</p>
        <a href="/faq/" class="btn btn-primary inline-block">Browse Our FAQ</a>
    </div>
</section>
