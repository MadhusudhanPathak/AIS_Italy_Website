---
layout: page.njk
title: About Us
permalink: /about/
---

<!-- Hero Section -->
<section class="hero">
    <div class="container text-center relative z-10">
        <h1>About AI Safety Italia</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">We are a grassroots community dedicated to reducing risks from advanced AI and ensuring its safe development for humanity's benefit.</p>
    </div>
</section>

<!-- Mission and Vision -->
<section class="section">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="feature-box">
                <span class="text-5xl mb-4 block">🎯</span>
                <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
                <p>We work to raise awareness about AI safety challenges, upskill individuals in the field, and create opportunities for collaboration among researchers, policymakers, and technologists committed to safer AI.</p>
                <p class="text-sm text-gray-600 mt-4">We believe that addressing AI safety is one of the most important challenges of our time.</p>
            </div>
            <div class="feature-box">
                <span class="text-5xl mb-4 block">🌍</span>
                <h2 class="text-2xl font-bold mb-4">Our Vision</h2>
                <p>A world where advanced AI systems are developed responsibly, with safety and human values at the core of AI development practices across organizations and governments.</p>
                <p class="text-sm text-gray-600 mt-4">We're building a community of informed, engaged professionals dedicated to this vision.</p>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Our Approach -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="container">
        <h2 class="text-center mb-12">How We Work</h2>
        <div class="feature-list">
            <div class="feature-item">
                <span class="feature-icon">📚</span>
                <div class="feature-content">
                    <h4>Education & Learning</h4>
                    <p>Comprehensive 8-week courses on AI governance and alignment, making complex topics accessible to everyone.</p>
                </div>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🤝</span>
                <div class="feature-content">
                    <h4>Community Building</h4>
                    <p>Connect researchers, practitioners, and enthusiasts to share knowledge and collaborate on solutions.</p>
                </div>
            </div>
            <div class="feature-item">
                <span class="feature-icon">📦</span>
                <div class="feature-content">
                    <h4>Resources & Tools</h4>
                    <p>Curated learning materials, research guides, and connections to leading organizations in AI safety.</p>
                </div>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🎤</span>
                <div class="feature-content">
                    <h4>Events & Workshops</h4>
                    <p>Regular workshops, roundtables, and networking events featuring industry experts and thought leaders.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Team Section -->
<section class="section">
    <div class="container">
        <div class="text-center mb-16">
            <h2>Our Leadership Team</h2>
            <p class="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">Passionate individuals driving AI safety forward</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {% for member in team %}
            <div class="card hover-lift text-center bg-gray-50">
                <div class="card-body">
                    <div class="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                        {{ member.name | first }}
                    </div>
                    <h3 class="mb-2">{{ member.name }}</h3>
                    <p class="text-sm text-emerald-600 font-semibold mb-3 uppercase tracking-wide">{{ member.role }}</p>
                    <p class="text-sm text-gray-600 mb-6">{{ member.bio }}</p>
                </div>
                <div class="card-footer">
                    <a href="mailto:{{ member.email }}" class="text-sm text-emerald-600 hover:text-emerald-700 font-semibold">Get in touch</a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- Values Section -->
<section class="section bg-gradient-to-br from-slate-900 to-slate-800 text-white">
    <div class="container">
        <h2 class="text-center text-white mb-12">Our Core Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card-dark">
                <span class="text-3xl mb-4 block">🔬</span>
                <h3 class="text-white mb-3">Evidence-Based</h3>
                <p>We ground our work in rigorous research and evidence, staying connected to cutting-edge developments in AI safety.</p>
            </div>
            <div class="card-dark">
                <span class="text-3xl mb-4 block">🤝</span>
                <h3 class="text-white mb-3">Collaborative</h3>
                <p>We believe in the power of community and work together across disciplines to address complex challenges.</p>
            </div>
            <div class="card-dark">
                <span class="text-3xl mb-4 block">🌱</span>
                <h3 class="text-white mb-3">Inclusive</h3>
                <p>AI safety concerns everyone. We welcome diverse perspectives and create accessible entry points for all.</p>
            </div>
            <div class="card-dark">
                <span class="text-3xl mb-4 block">⚡</span>
                <h3 class="text-white mb-3">Action-Oriented</h3>
                <p>Beyond awareness, we empower people to take concrete steps toward safer AI development.</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box">
            <h2>Join Our Mission</h2>
            <p>Whether you're a researcher, student, professional, or just curious about AI safety, there's a place for you in our community.</p>
            <a href="{{ site.forms.mailingList }}" target="_blank" class="btn bg-white text-accent hover:bg-gray-100 mt-6">Get Involved Today</a>
        </div>
    </div>
</section>
