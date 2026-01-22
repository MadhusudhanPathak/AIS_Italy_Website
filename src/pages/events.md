---
layout: page.njk
title: Events & News
permalink: /events/
---

<!-- Hero Section -->
<section class="hero">
    <div class="container text-center relative z-10">
        <h1>Events & News</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Stay updated on our latest events, workshops, and announcements.</p>
    </div>
</section>

<!-- Events Timeline -->
<section class="section">
    <div class="container">
        <div class="text-center mb-12">
            <span class="badge badge-primary mb-4">📅 Calendar</span>
            <h2>Upcoming & Recent Events</h2>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-6">
            <!-- Upcoming Event 1 -->
            <div class="card hover-lift">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <span class="badge badge-info">Upcoming</span>
                        <h3 class="mt-3 mb-2">AI Safety Governance Panel Discussion</h3>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-gray-600 mb-4 font-semibold">
                    <span>📅</span>
                    <span>February 15, 2026 | 18:00 CET</span>
                </div>
                <p class="mb-4">Join us for a panel discussion with leading experts on AI governance frameworks, regulatory approaches, and the role of international cooperation in AI safety policy.</p>
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <p class="text-sm text-gray-700"><span class="font-semibold">Format:</span> Online Panel + Q&A</p>
                    <p class="text-sm text-gray-700"><span class="font-semibold">Duration:</span> 2 hours</p>
                    <p class="text-sm text-gray-700"><span class="font-semibold">Speakers:</span> Industry leaders & policymakers</p>
                </div>
                <a href="{{ site.forms.mailingList }}" target="_blank" class="text-accent font-semibold hover:underline">Register for Details →</a>
            </div>

            <!-- Upcoming Event 2 -->
            <div class="card hover-lift">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <span class="badge badge-info">Upcoming</span>
                        <h3 class="mt-3 mb-2">8-Week Introductory Courses Begin</h3>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-gray-600 mb-4 font-semibold">
                    <span>📅</span>
                    <span>March 2026</span>
                </div>
                <p class="mb-4">Our flagship educational program launches with two tracks: AI Safety Governance and AI Safety Alignment. Learn from experienced practitioners and join a community of like-minded individuals.</p>
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <p class="text-sm text-gray-700"><span class="font-semibold">Duration:</span> 8 weeks</p>
                    <p class="text-sm text-gray-700"><span class="font-semibold">Format:</span> Online + Discussion Groups</p>
                    <p class="text-sm text-gray-700"><span class="font-semibold">Commitment:</span> 3-4 hours/week</p>
                </div>
                <a href="{{ site.forms.courseApplication }}" target="_blank" class="btn btn-primary inline-block">Apply Now</a>
            </div>

            <!-- Recurring Event -->
            <div class="card hover-lift">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <span class="badge badge-success">Recurring</span>
                        <h3 class="mt-3 mb-2">Monthly Researcher Meetup</h3>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-gray-600 mb-4 font-semibold">
                    <span>📅</span>
                    <span>Every 2nd Thursday at 19:00 CET</span>
                </div>
                <p class="mb-4">Informal gathering for AI safety researchers, students, and enthusiasts to discuss recent papers, share ideas, and collaborate on projects. A great place to network with the community!</p>
                <div class="bg-green-50 p-4 rounded-lg border border-green-100 mb-4">
                    <p class="text-sm text-gray-700"><span class="font-semibold">Format:</span> Virtual Meetup</p>
                    <p class="text-sm text-gray-700"><span class="font-semibold">Size:</span> 20-40 participants</p>
                    <p class="text-sm text-gray-700"><span class="font-semibold">Level:</span> All experience welcome</p>
                </div>
                <a href="{{ site.forms.mailingList }}" target="_blank" class="text-accent font-semibold hover:underline">Get Meeting Details →</a>
            </div>
        </div>
    </div>

</section>

<div class="divider"></div>

<!-- Past Events -->
<section class="section bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container">
        <h2 class="text-center mb-12">✨ Recent Highlights</h2>
        <div class="max-w-3xl mx-auto space-y-6">
            <!-- Past Event 1 -->
            <div class="card">
                <div class="flex items-start gap-4 mb-4">
                    <span class="text-2xl">🏆</span>
                    <div class="flex-1">
                        <h3 class="mb-2">AI Safety Roundtable Discussion</h3>
                        <p class="text-sm text-gray-600">📅 January 20, 2026</p>
                    </div>
                </div>
                <p class="mb-4">Industry experts discussed current challenges in AI alignment research and governance. Topics included transformer interpretability and societal impacts of large language models.</p>
                <div class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    👥 40+ participants
                </div>
            </div>

            <!-- Past Event 2 -->
            <div class="card">
                <div class="flex items-start gap-4 mb-4">
                    <span class="text-2xl">🎓</span>
                    <div class="flex-1">
                        <h3 class="mb-2">Introduction to AI Safety Workshop</h3>
                        <p class="text-sm text-gray-600">📅 January 15, 2026</p>
                    </div>
                </div>
                <p class="mb-4">Interactive workshop covering fundamentals of AI safety, technical approaches, policy considerations, and career paths. Hands-on activities and expert insights made it engaging for all levels.</p>
                <div class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    👥 50+ participants
                </div>
            </div>
        </div>
    </div>

</section>

<!-- Newsletter CTA -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box">
            <h2>Never Miss an Event</h2>
            <p>Subscribe to our mailing list and get notifications about upcoming events, workshops, and news.</p>
            <a href="{{ site.forms.mailingList }}" target="_blank" class="btn bg-white text-accent hover:bg-gray-100 mt-6">Subscribe to Mailing List</a>
        </div>
    </div>
</section>
