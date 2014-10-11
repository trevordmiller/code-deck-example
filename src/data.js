// ================================================================================
// DATA
// ================================================================================

'use strict';

// Grab user's github data via the GitHub API
var githubData = getData('https://api.github.com/users/trevordmiller');

// Global context for Handlebars templates in `src/templates`
var data = {
	githubData: githubData,



	// ------------------------------------------
	// CUSTOMIZE BELOW
	// ------------------------------------------

	theme: {
		mainColor: '#fead4c',
		specialTransition: 'zoom'
	},
	title: 'Code deck example',
	subtitle: 'Automatically built with a Yeoman generator.',
	greetingText: 'Hi there!',
	goodbyeText: 'The End.',
	sections: [
		{
			title: 'Example Content',
			subtitle: 'Stuff you can put in slides.',
			slides: [
				{
					title: 'Code',
					uniqueContent: '
						<pre>
							<code>
var coolFunction = function() {
    console.log("This is block of code.");
};
							</code>
						</pre>
					'
				},
				{
					title: 'Paragraph',
					uniqueContent: '
						<p>This is a paragraph.</p>
					'
				},
				{
					title: 'Strong',
					uniqueContent: '
						This is a <strong>strong</strong> element.
					'
				},
				{
					title: 'Unordered list',
					uniqueContent: '
						<ul>
							<li>This is an unordered list.</li>
							<li>You can make items appear...</li>
							<li class="fragment">one</li>
							<li class="fragment">at</li>
							<li class="fragment">a</li>
							<li class="fragment">time.</li>
							<li class="fragment">You can use ordered lists too.</li>
						</ul>
					'
				},
				{
					title: 'Video',
					uniqueContent: '
						<iframe class="stretch" src="//www.youtube.com/embed/XQu8TTBmGhA" frameborder="0" allowfullscreen></iframe>
					'
				},
				{
					title: 'Blockquote',
					uniqueContent: '
						<blockquote>
							"This is a quoteblock." - Some cool dude.
						</blockquote>
					'
				},
				{
					title: 'Guess what?',
					uniqueContent: '
						<h3><em>Code Deck</em> automatically scales with more sections and slides...</h3>
						<p>You can add more sections and slides inside of <span class="code">src/data.js</span>.</p>
					'
				}
			]
		},
		{
			title: 'Easy peasy...',
			subtitle: '',
			slides: [
				{
					title: '',
					uniqueContent: '
						<h2>You just need to <strong>generate</strong> your presentation, then <strong>customize</strong> it.</h2>
					'
				},
				{
					title: '',
					uniqueContent: '
						<h2>Behold, <a href="https://github.com/trevordmiller/generator-code-deck">the documentation</a></h2>
					'
				},
				{
					title: '',
					uniqueContent: '
						<h1>Now...</h1>
						<h3>Go forth and build cool stuff.</h3>
					'
				}
			]
		},
	]
};
