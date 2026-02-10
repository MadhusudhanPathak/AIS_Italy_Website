---
layout: page.njk
title: Activities
permalink: /activities/
---

<!-- Hero Section -->
<section class="hero">
    <div class="container text-center relative z-10">
        <h1>Our Activities</h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Explore the programs and initiatives we offer to support AI safety learning and community building.</p>
    </div>
</section>

<!-- Main Programs -->
<section class="section">
    <div class="container">
        <div class="text-center mb-12">
            <span class="badge badge-primary mb-4">📋 Programs</span>
            <h2>Our Educational Programs</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Introductory Courses -->
            <div class="card hover-lift bg-emerald-50">
                <div class="card-body">
                    <div class="flex items-center space-x-3 mb-4">
                        <span class="text-4xl">📖</span>
                        <h3 class="mb-0">Introductory Courses</h3>
                    </div>
                    <p class="text-gray-600 font-semibold mb-4">Our flagship 8-week learning program</p>
                    <p class="mb-6">Our flagship reading and discussion groups introduce participants to AI safety concepts, research, and career opportunities in an accessible way.</p>
                    
                    <h4 class="font-bold text-emerald-600 mb-3 mt-6">🛤️ Track 1: AI Safety Governance</h4>
                    <p class="text-sm text-gray-700 mb-6">Explore policy frameworks, international cooperation, and governance approaches to AI safety. Learn about regulatory landscapes and institutional responses to AI risks.</p>
                    
                    <h4 class="font-bold text-emerald-600 mb-3">🛤️ Track 2: AI Safety Alignment</h4>
                    <p class="text-sm text-gray-700 mb-6">Dive into technical approaches to AI alignment, interpretability research, and safety methodologies. Understand how to build AI systems that behave as intended.</p>
                    
                    <div class="bg-emerald-100 p-4 rounded-lg mt-6 mb-6 border border-emerald-200">
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p class="text-gray-600">⏱️ Duration</p>
                                <p class="font-semibold">8 weeks</p>
                            </div>
                            <div>
                                <p class="text-gray-600">👥 Commitment</p>
                                <p class="font-semibold">3-4 hrs/week</p>
                            </div>
                            <div>
                                <p class="text-gray-600">📅 Next Cohort</p>
                                <p class="font-semibold">March 2026</p>
                            </div>
                            <div>
                                <p class="text-gray-600">💻 Format</p>
                                <p class="font-semibold">Online + Groups</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ site.forms.courseApplication }}" target="_blank" class="btn btn-primary w-full text-center">Express Interest</a>
                </div>
            </div>

            <!-- Advanced Reading Group -->
            <div class="card hover-lift bg-emerald-50">
                <div class="card-body">
                    <div class="flex items-center space-x-3 mb-4">
                        <span class="text-4xl">🔬</span>
                        <h3 class="mb-0">Advanced Reading Group</h3>
                    </div>
                    <p class="text-gray-600 font-semibold mb-4">For experienced researchers and practitioners</p>
                    <p class="mb-6">Deep dive into cutting-edge research and discuss open problems in the field with other experts and enthusiasts.</p>

                    <h4 class="font-bold text-emerald-600 mb-3 mt-6">What We Cover</h4>
                    <ul class="text-sm space-y-2 mb-6">
                        <li class="flex items-start">
                            <span class="text-emerald-600 mr-2">✓</span>
                            <span>Recent AI safety papers and breakthroughs</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-emerald-600 mr-2">✓</span>
                            <span>Advanced technical topics in alignment</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-emerald-600 mr-2">✓</span>
                            <span>Policy and governance discussions</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-emerald-600 mr-2">✓</span>
                            <span>Collaborative research projects</span>
                        </li>
                    </ul>

                    <div class="bg-emerald-100 p-4 rounded-lg mb-6 border border-emerald-200">
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p class="text-gray-600">🎯 Frequency</p>
                                <p class="font-semibold">Bi-weekly</p>
                            </div>
                            <div>
                                <p class="text-gray-600">💬 Format</p>
                                <p class="font-semibold">Seminars + Chat</p>
                            </div>
                            <div>
                                <p class="text-gray-600">📊 Size</p>
                                <p class="font-semibold">Small Groups</p>
                            </div>
                            <div>
                                <p class="text-gray-600">📋 Prereq</p>
                                <p class="font-semibold">AI Safety Exp</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="mailto:{{ site.site.email }}" class="btn btn-primary w-full text-center">Join Us</a>
                </div>
            </div>
        </div>
    </div>

</section>

<div class="divider"></div>

<!-- Research & Mentorship -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="container">
        <div class="max-w-3xl mx-auto">
            <div class="card-accent border-2 border-accent">
                <div class="flex items-start space-x-6">
                    <span class="text-5xl flex-shrink-0">🧑‍🔬</span>
                    <div class="flex-1">
                        <h2 class="text-accent mb-4 mt-0">Research & Mentorship Program</h2>
                        <p class="mb-4">Interested in contributing to AI safety research? We offer mentorship opportunities connecting you with experienced researchers working on critical problems in the field.</p>
                        <p class="mb-6">Whether you're looking to start a research project, collaborate with others, or explore career opportunities, we can help connect you with the right people and resources.</p>
                        <a href="mailto:{{ site.site.email }}" class="btn btn-primary">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>

<!-- External Opportunities -->
<section class="section">
    <div class="container">
        <h2 class="text-center mb-12">🌟 Explore More Opportunities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card hover-lift hover:shadow-2xl bg-gray-50">
                <div class="card-body">
                    <span class="text-4xl mb-3 block">💼</span>
                    <h3>AI Safety Career Board</h3>
                    <p>Discover career opportunities with leading organizations like Anthropic, OpenAI, and DeepMind working on AI safety challenges.</p>
                </div>
                <div class="card-footer">
                    <a href="https://jobs.80000hours.org" target="_blank" class="text-emerald-600 font-semibold">Browse Positions →</a>
                </div>
            </div>
            <div class="card hover-lift hover:shadow-2xl bg-gray-50">
                <div class="card-body">
                    <span class="text-4xl mb-3 block">🏆</span>
                    <h3>Alignment Hackathons</h3>
                    <p>Participate in 48-hour collaborative challenges to work on AI alignment problems and win recognition.</p>
                </div>
                <div class="card-footer">
                    <a href="https://www.apartresearch.com" target="_blank" class="text-emerald-600 font-semibold">View Competitions →</a>
                </div>
            </div>
            <div class="card hover-lift hover:shadow-2xl bg-gray-50">
                <div class="card-body">
                    <span class="text-4xl mb-3 block">🎖️</span>
                    <h3>Alignment Awards</h3>
                    <p>Compete for recognition and prizes for your work on AI alignment and safety initiatives.</p>
                </div>
                <div class="card-footer">
                    <a href="https://www.alignmentawards.com" target="_blank" class="text-emerald-600 font-semibold">Learn More →</a>
                </div>
            </div>
            <div class="card hover-lift hover:shadow-2xl bg-gray-50">
                <div class="card-body">
                    <span class="text-4xl mb-3 block">📚</span>
                    <h3>Learning Resources</h3>
                    <p>Access our curated collection of AI safety resources, papers, guides, and educational materials.</p>
                </div>
                <div class="card-footer">
                    <a href="/community/" class="text-emerald-600 font-semibold">Explore Resources →</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section bg-gradient-to-r from-accent via-safety-blue to-safety-purple">
    <div class="container">
        <div class="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of individuals committed to ensuring AI is developed safely and for the benefit of humanity.</p>
            <a href="{{ site.forms.mailingList }}" target="_blank" class="btn bg-white text-accent hover:bg-gray-100 mt-6">Subscribe to Updates</a>
        </div>
    </div>
</section>
                <a href="/community/" class="card hover:shadow-lg">
                    <h3>Community Resources »</h3>
                    <p>Explore learning materials, research links, and community discussions.</p>
                </a>
            </div>
        </div>
    </div>
</section>
