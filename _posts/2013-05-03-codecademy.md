---
layout: post
title: "Why I Don't Like Codecademy"
description: "In the world of beginner computer science education, Codecademy is the best. But it could be better."
category: articles
tags: [javascript, education, codecademy]
image:
  feature: codecademy.jpg
---

To begin, my background: I am an instructor and founder of CODE Club at a school and work with middle school and high school students who are learning to build websites. I have found that [Codecademy](http://www.codecademy.com/dashboard) is a much better teacher than I can be, but here are some of the more common problems that I've had with it.

## How do you actually make things?
Two weeks in and this is the most common question I hear. How do I actually get a website up and running? At this point, the students know how to make a basic website, they know CSS and HTML basics, they know how to make links.

But they don't know how to get a website online. "How do I get a dot-com?" Codecademy _needs_ at least one lesson at the end of their web fundamentals track to teach students how to get their static HTML, CSS, and JavaScript files hosted online.

<blockquote>How do I get a dot-com?</blockquote>

The best way to do this would probably be to partner with a static website hosting service. I introduced my students to [JS Bin](http://jsbin.com/) which shares a lot of commonalities in interface. Codecademy fortunately allows students to save projects that they work on, and all it took was one minute of copying and pasting the code into the right window to get a website hosted online to the public.
 ![JS Bin for hosting websites]({{ site.url }}/images/jsbin.png)
There are other websites which I could see Codecademy partnering with to have a similar experience (or Codecademy could build something over their own.) These include:
- [Cloud9 IDE](https://c9.io/) - A web based IDE. It would also allow students to grow as they learn more from Codecademy with support for Python, PHP, and Ruby.
- [CodePen](http://codepen.io/) - Much like JS Bin but with a slick interface.
- [GitHub Pages](http://pages.github.com/) - A step up in difficulty, but introduces concepts like version control.
- [Neocities](https://neocities.org/) - Geocities was how I got into web development. Neocities offers much the same: hosting of static files, a subdomain, and 10 MB of storage space.

I do understand that these services oversimplify the process of deploying and hosting static files, but in terms of engagement, the sooner that a new learner can see their creation online and be able to share it with their friends, the more invested they will be in the lessons.

## Independent learning
Codecademy's greatest strength is that it is self-paced. Most of the students that I work with are able to go on their own, but occasionally have to ask me or a volunteer for help. For Codecademy to be fully useful, one must be able to learn from it without _any_ outside assitance.

Right now, each lesson prompts a user to type something into the console which Codecademy tests for correctness. It is not unusual for a student to run into a problem they can't solve, and even though the website offers hints, oftentime learners have turn to the Q&A to scour for answers. 
 ![Codecademy QA]({{ site.url }}/images/codecademy_qa.png)
Before, I was bent on this but now I am resolved. Codecademy should have a `show answer` button with the correct code to the solution. Although a small number of students may end up blindly copying and pasting these snippets, I think it is absolutely necessary to have an option for the right answer. Students who are stuck will get discouraged and stop learning, but with the opportunity to see a solution, they may be able to correct themselves.

## Stuck in the console
This is mainly an issue I take with the JavaScript course, but I believe that the lessons stay inside the console far too long that students lose interest. Many of the early projects and games such as "Rock, Paper, Scissors" and "Choose Your Own Adventure" are simply text-based games all the way up until students learn to use objects. Full fledged applications can be built without knowing objects with HTML and JavaScript alone, and if students are able to create visual representations of their games, they will be far more engaged and more likely to show off what they've made to friends.

I've mentioned the 'showing things off to friends' bit earlier, and I think it's important. A lot of what people perceive to be valuable comes from judging what they do against how others feel about it. Although not true for everyone, it is important that their is something visual produced that can be shown off, a token of progress and pride off which students gain motivation to continue their lessons.

## The good
Although I do have my qualms about Codecademy as a primary learning tool, I really do believe it is the best computer science education platform out there.

Each lesson is well-paced and teaches important, relevant information. I've seen these lessons get updated and refined--in the past, students would learn recursion shortly after learning functions. Although recursion is fancy and useful, it is completely irrelevant to the beginner who is still trying to have a grasp for how return values work. Fortunately, the JavaScript track is now very fancifully done.

There is a nice selection of languages and libraries to learn: PHP, Python, Ruby, and jQuery are all important technologies which have legitimate uses. I do think that in addition to language tracks, there should be project tracks which can implement multiple languages, but for now Codecademy has a good start.

In retrospect, my title for this post is a little too harsh--I love Codecademy--but that doesn't mean there isn't stil work to be done.