---
layout: page.njk
title: Home
permalink: /
---

<!-- Hero Section -->
<section class="hero">
    <div class="container text-center relative z-10">
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6">We are a growing grassroots AI community</h1>
        <p class="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">Working to reduce risks from advanced AI by raising awareness, upskilling and creating opportunities for a safer AI world of tomorrow.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="{{ site.forms.mailingList }}" target="_blank" class="btn btn-primary text-lg">Join our Community</a>
            <a href="#learn-more" class="btn btn-outline text-white border-white hover:bg-white hover:text-slate-900">Learn More</a>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="section bg-white">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="stat-box hover-lift">
                <div class="stat-number">500+</div>
                <div class="stat-label">Community Members</div>
                <p class="text-sm text-gray-600 mt-2">Engaged individuals passionate about AI safety</p>
            </div>
            <div class="stat-box hover-lift">
                <div class="stat-number">8</div>
                <div class="stat-label">Week Courses</div>
                <p class="text-sm text-gray-600 mt-2">In-depth learning programs on AI safety</p>
            </div>
            <div class="stat-box hover-lift">
                <div class="stat-number">15+</div>
                <div class="stat-label">Monthly Events</div>
                <p class="text-sm text-gray-600 mt-2">Workshops, talks, and networking sessions</p>
            </div>
        </div>
    </div>
</section>

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
            <div class="card hover-lift">
                <div class="flex items-center space-x-3 mb-4">
                    <span class="text-3xl">🗣️</span>
                    <h3 class="mb-0">AI Safety Roundtable</h3>
                </div>
                <p class="text-sm font-semibold text-accent mb-4">📅 January 20, 2026</p>
                <p>Industry experts discussed current challenges in AI alignment research and governance. Key topics included transformer interpretability and societal impacts.</p>
                <div class="mt-4 pt-4 border-t border-gray-100">
                    <p class="text-sm text-gray-600">👥 40+ participants</p>
                </div>
            </div>
            <div class="card hover-lift">
                <div class="flex items-center space-x-3 mb-4">
                    <span class="text-3xl">🎓</span>
                    <h3 class="mb-0">AI Safety Workshop</h3>
                </div>
                <p class="text-sm font-semibold text-accent mb-4">📅 January 15, 2026</p>
                <p>Interactive workshop covering fundamentals of AI safety, technical approaches, and policy considerations with hands-on activities.</p>
                <div class="mt-4 pt-4 border-t border-gray-100">
                    <p class="text-sm text-gray-600">👥 50+ participants</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Mission Section with Split Layout -->
<section class="section bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
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
                        <a href="/community/" class="inline-block text-accent font-semibold hover:text-blue-300 transition-colors mt-6">Explore the Issues →</a>
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

<!-- Get Involved Section with Icon Boxes -->
<section class="section bg-white">
    <div class="container">
        <div class="text-center mb-16">
            <span class="badge badge-primary mb-4">🚀 Ways to Participate</span>
            <h2>Get Involved in Our Community</h2>
            <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Choose your path and make a real impact on AI safety</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Intro Courses -->
            <div class="icon-box hover-lift">
                <div class="icon">📖</div>
                <h3 class="text-lg font-bold mb-2">Courses</h3>
                <p class="text-sm text-gray-600 mb-4">Join our 8-week programs in AI Governance or Alignment.</p>
                <a href="{{ site.forms.courseApplication }}" target="_blank" class="text-accent font-semibold text-sm hover:underline">Learn More →</a>
            </div>

            <!-- Research -->
            <div class="icon-box hover-lift">
                <div class="icon">🔬</div>
                <h3 class="text-lg font-bold mb-2">Research</h3>
                <p class="text-sm text-gray-600 mb-4">Contribute to AI safety research with mentorship.</p>
                <a href="mailto:{{ site.site.email }}" class="text-accent font-semibold text-sm hover:underline">Get Started →</a>
            </div>

            <!-- Jobs -->
            <div class="icon-box hover-lift">
                <div class="icon">💼</div>
                <h3 class="text-lg font-bold mb-2">Careers</h3>
                <p class="text-sm text-gray-600 mb-4">Explore opportunities at leading AI safety orgs.</p>
                <a href="https://jobs.80000hours.org" target="_blank" class="text-accent font-semibold text-sm hover:underline">Explore →</a>
            </div>

            <!-- Competitions -->
            <div class="icon-box hover-lift">
                <div class="icon">🏆</div>
                <h3 class="text-lg font-bold mb-2">Competitions</h3>
                <p class="text-sm text-gray-600 mb-4">Participate in AI alignment challenges.</p>
                <a href="https://www.apartresearch.com" target="_blank" class="text-accent font-semibold text-sm hover:underline">View Events →</a>
            </div>
        </div>
    </div>

</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple relative overflow-hidden">
    <div class="container">
        <div class="cta-box">
            <h2>Ready to Join the Community?</h2>
            <p>Be part of a global movement working toward safer, more beneficial AI development.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ site.forms.mailingList }}" target="_blank" class="btn bg-white text-accent hover:bg-gray-100">Subscribe to Newsletter</a>
                <a href="/events/" class="btn bg-white bg-opacity-20 text-white border-2 border-white hover:bg-white hover:text-accent">Explore Events</a>
            </div>
        </div>
    </div>
</section>
