---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

{% 
include hero.html 
image-url="./images/hero-test-02.jpg" 
headline="The easy way to fundraise" 
subhead="Our intuitive platform enables your organization to create and manage online raffles and 50/50 fundraisers" 
%}


{%
include benefits.html
headline="Why Rafflebox?"
subhead="Rafflebox provides awesome experiences for organizers and participants!"

benefit-img-1="./images/benefit-flexible.png"
benefit-heading-1="Flexibility"
benefit-description-1="Run fundraisers online, on-site, or do both"

benefit-img-2="./images/benefit-mobile.png"
benefit-heading-2="Ease of use"
benefit-description-2="Participants can buy tickets from any device"

benefit-img-3="./images/benefit-social.png"
benefit-heading-3="Social reach"
benefit-description-3="Use social media to target your audience"

benefit-img-4="./images/benefit-reward.png"
benefit-heading-4="Rewards"
benefit-description-4="Encouragement is built into the platform"

benefit-img-5="./images/benefit-security.png"
benefit-heading-5="Security"
benefit-description-5="Built by experts and industry approved"
%}


{%
include steps.html
headline="How it works"

step-img-1="./images/step-account.png"
step-heading-1="Create account"

step-img-2="./images/step-setup.png"
step-heading-2="Add a raffle"

step-img-3="./images/step-tickets.png"
step-heading-3="Sell tickets"

step-img-4="./images/step-winner.png"
step-heading-4="Pick a winner"
%}


{%
include slider.html
headline="Fundraising for Everyone"
subhead=""
button-link="./blog.html"
button-text="Explore success stories"

slide-img-1="./images/slider-test-01.jpg"
slide-heading-1="Big events"
slide-description-1="Our technology scales and keeps running smoothly even with stadium-sized audiences"

slide-img-2="./images/slider-test-02.jpg"
slide-heading-2="Clubs & organizations"
slide-description-2="It's easy to promote your fundraiser with your own comms and social media"

slide-img-3="./images/slider-test-04.jpg"
slide-heading-3="Sports Teams"
slide-description-3="Sell tickets at games and in between games in a way that is safe for all ages"

slide-img-4="./images/slider-test-03.jpg"
slide-heading-4="Teachers & schools"
slide-description-4="Rafflebox makes it easy to connect with remote audiences and rewards top sellers"

slide-img-5="./images/slider-test-05.jpg"
slide-heading-5="Church groups"
slide-description-5="Run a campaign during an event or configure your campaign to run for weeks"

slide-img-6="./images/slider-test-06.jpg"
slide-heading-6="Everyone"
slide-description-6="Rafflebox is a great fit for anyone with is a cause who needs to fundraise"
%}



{% assign logoList = "./images/logo-hockey-canada.png,./images/logo-nova-scotia-soccer-league.png,./images/logo-hockey-canada.png,./images/logo-nova-scotia-soccer-league.png,./images/logo-hockey-canada.png,./images/logo-nova-scotia-soccer-league.png,./images/logo-hockey-canada.png,./images/logo-nova-scotia-soccer-league.png" | split: ',' %}
{%
include logo-farm.html
headline="Our Partners"

logos=logoList
%}

{%
include quote.html
thumbnail="./images/profile-hipster.jpg"
quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
name="Name McName"
organization="Title or Organization"
%}

